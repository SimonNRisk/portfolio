"use client";

import { useCallback, useEffect } from "react";
import { SimonCaptchaPanel } from "./SimonCaptchaPanel";

type ContactCaptchaModalProps = {
  open: boolean;
  onClose: () => void;
  onVerified?: () => void;
  onCaptchaFail?: () => void;
};

export function ContactCaptchaModal({ open, onClose, onVerified, onCaptchaFail }: ContactCaptchaModalProps) {
  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!open) return;
    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onKeyDown]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/45"
      role="presentation"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[min(92vw,480px)] min-w-0 mx-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="captcha-target-heading"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close verification dialog"
          className="absolute top-2 right-2 z-20 flex h-10 w-10 items-center justify-center rounded-md text-white hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden>
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <SimonCaptchaPanel onVerified={onVerified} onCaptchaFail={onCaptchaFail} />
      </div>
    </div>
  );
}
