"use client";

import { useState, useEffect } from "react";

export function CodedToday() {
  const [totalToday, setTotalToday] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getCodedToday() {
      try {
        const response = await fetch("/api/github/today");
        const data = await response.json();

        if (data.error) {
          setError(data.error);
        } else {
          setTotalToday(data.totalToday);
        }
      } catch (error) {
        console.error("Failed to fetch coding data:", error);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    }

    getCodedToday();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-4">
        <div className="text-gray-600">Loading coding stats...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-4">
        <div className="text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="text-center py-4">
      <div className="inline-block bg-white rounded-lg shadow-md px-6 py-3 border">
        <span className="text-gray-700 font-medium">
          Coded Today: <span className="text-blue-600 font-bold">{totalToday}</span> contributions
        </span>
      </div>
    </div>
  );
}
