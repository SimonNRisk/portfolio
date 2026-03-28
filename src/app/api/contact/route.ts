import { NextResponse } from "next/server";

type Body = {
  token?: string;
};

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const expected = process.env.CONTACT_REVEAL_TOKEN;
  const email = process.env.CONTACT_EMAIL;

  if (!expected || !email) {
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }

  if (body.token !== expected) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  return NextResponse.json({ email });
}
