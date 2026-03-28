"use client";

import { CaptchaActionsFooter } from "./CaptchaActionsFooter";
import { CaptchaImageGrid } from "./CaptchaImageGrid";
import { CaptchaInstructionHeader } from "./CaptchaInstructionHeader";
import { useCaptchaChallenge } from "./useCaptchaChallenge";

type SimonCaptchaPanelProps = {
  onVerified?: () => void;
  onCaptchaFail?: () => void;
};

export function SimonCaptchaPanel({ onVerified, onCaptchaFail }: SimonCaptchaPanelProps) {
  const { orderedTiles, selectedIds, toggle, newRound, evaluateSubmit } = useCaptchaChallenge();

  const handleSubmit = () => {
    if (evaluateSubmit()) {
      onVerified?.();
    } else {
      alert("Not quite - please try again.");
      onCaptchaFail?.();
    }
  };

  const handlePrimary = () => {
    if (selectedIds.size === 0) newRound();
    else handleSubmit();
  };

  const primaryLabel = selectedIds.size === 0 ? "Skip" : "Submit";

  return (
    <div className="w-full min-w-0 overflow-hidden bg-white border border-[#dadce0]">
      <CaptchaInstructionHeader
        targetLabel="Simon"
        skipHint="if there are none, click skip"
        headingId="captcha-target-heading"
      />
      <div className="bg-white">
        <CaptchaImageGrid tiles={orderedTiles} selectedIds={selectedIds} onToggle={toggle} />
      </div>
      <CaptchaActionsFooter primaryLabel={primaryLabel} onPrimary={handlePrimary} />
    </div>
  );
}
