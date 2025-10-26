"use client";

import { useState, useEffect } from "react";

export function CodedToday() {
  const [totalToday, setTotalToday] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [contributedToday, setContributedToday] = useState(false);
  useEffect(() => {
    async function getCodedToday() {
      try {
        const response = await fetch("/api/github/today");
        const data = await response.json();

        if (data.error) {
          setError(data.error);
        } else {
          setTotalToday(data.totalToday);
          setContributedToday(data.contributedToday);
        }
      } catch {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    }

    getCodedToday();
  }, []);

  if (loading) {
    return <span>Loading coding stats... </span>;
  }

  if (error) {
    return (
      <span className="text-red-600">
        But, I clearly haven't coded enough. This is supposed to tell you how many contributions I've made today, but no
        I got an error: {error}
      </span>
    );
  }

  if (!contributedToday) {
    return <span>I genuinely love coding, but according to the Github API, I didn't contribute today. Sorry!</span>;
  }

  if (totalToday === 1) {
    return (
      <span>
        In fact, I've even made
        <a href="https://github.com/SimonNRisk" target="_blank" rel="noopener noreferrer" className="underline">
          {" "}
          {totalToday} contribution today
        </a>
        ! according to the Github API!
      </span>
    );
  }

  return (
    <span>
      In fact, I've even made{" "}
      <a href="https://github.com/SimonNRisk" target="_blank" rel="noopener noreferrer" className="underline">
        {totalToday} contributions today
      </a>
      !
    </span>
  );
}
