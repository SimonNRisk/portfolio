import { NextResponse } from "next/server";
import { startOfDay } from "date-fns";
import { toZonedTime } from "date-fns-tz";

const GITHUB_GRAPHQL = "https://api.github.com/graphql";

const query = `
  query($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      contributionsCollection(from: $from, to: $to) {
        hasAnyContributions
        contributionCalendar {
          totalContributions
        }
      }
    }
  }
`;

export async function GET() {
  const token = process.env.GITHUB_TOKEN!;
  const login = process.env.GITHUB_LOGIN!;
  const tz = process.env.GITHUB_TZ || "America/Toronto";

  if (!token || !login) {
    return NextResponse.json({ error: "Missing GITHUB_TOKEN or GITHUB_LOGIN" }, { status: 500 });
  }

  const nowUtc = new Date();
  const nowInZone = toZonedTime(nowUtc, tz);
  const startOfTodayInZone = startOfDay(nowInZone);
  const fromIso = new Date(startOfTodayInZone.getTime() - startOfTodayInZone.getTimezoneOffset() * 60000).toISOString();
  const toIso = nowUtc.toISOString();

  const body = JSON.stringify({
    query,
    variables: { login, from: fromIso, to: toIso },
  });

  const res = await fetch(GITHUB_GRAPHQL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    // Always fetch fresh (don’t cache secrets):
    cache: "no-store",
    body,
  });

  if (!res.ok) {
    const text = await res.text();
    return NextResponse.json({ error: "GitHub API error", status: res.status, body: text }, { status: 502 });
  }

  const json = await res.json();

  const cc = json?.data?.user?.contributionsCollection ?? {
    hasAnyContributions: false,
    contributionCalendar: { totalContributions: 0 },
  };

  return NextResponse.json({
    timezone: tz,
    from: fromIso,
    to: toIso,
    contributedToday: cc.hasAnyContributions === true,
    totalToday: cc.contributionCalendar?.totalContributions ?? 0,
  });
}
