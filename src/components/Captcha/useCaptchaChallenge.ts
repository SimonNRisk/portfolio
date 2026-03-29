"use client";

import { useCallback, useMemo, useState } from "react";
import { getCaptchaTiles, getCorrectSimonIds } from "./captchaAssets";
import { shuffleTiles } from "./shuffleTiles";
import { setsEqual } from "./validateSelection";
import type { CaptchaTile } from "./types";

export function useCaptchaChallenge() {
  const allTiles = useMemo(() => getCaptchaTiles(), []);
  const correctIds = useMemo(() => getCorrectSimonIds(allTiles), [allTiles]);

  const [orderedTiles, setOrderedTiles] = useState<CaptchaTile[]>(() => shuffleTiles(allTiles));
  const [selectedIds, setSelectedIds] = useState<Set<string>>(() => new Set());

  const toggle = useCallback((id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const newRound = useCallback(() => {
    setOrderedTiles(shuffleTiles(allTiles));
    setSelectedIds(new Set());
  }, [allTiles]);

  const evaluateSubmit = useCallback(() => setsEqual(selectedIds, correctIds), [selectedIds, correctIds]);

  return {
    orderedTiles,
    selectedIds,
    toggle,
    newRound,
    evaluateSubmit,
  };
}
