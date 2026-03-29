"use client";

import { useCallback, useState } from "react";

export function useContactReveal() {
  const [contactClicked, setContactClicked] = useState(false);
  const [revealedEmail, setRevealedEmail] = useState<string | null>(null);
  const [showHumanOnlyHint, setShowHumanOnlyHint] = useState(false);

  const handleContactVerified = useCallback(async () => {
    const token = process.env.NEXT_PUBLIC_CONTACT_REVEAL_TOKEN;
    if (!token) {
      alert("Contact reveal is not configured (missing NEXT_PUBLIC_CONTACT_REVEAL_TOKEN).");
      return;
    }
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      if (!res.ok) {
        alert("Could not verify contact. Please try again.");
        return;
      }
      const data = (await res.json()) as { email?: string };
      if (!data.email) {
        alert("Invalid response from server.");
        return;
      }
      setRevealedEmail(data.email);
      setContactClicked(false);
    } catch {
      alert("Network error. Please try again.");
    }
  }, []);

  const openContactModal = useCallback(() => setContactClicked(true), []);
  const closeContactModal = useCallback(() => setContactClicked(false), []);
  const onCaptchaFail = useCallback(() => setShowHumanOnlyHint(true), []);

  return {
    contactClicked,
    openContactModal,
    closeContactModal,
    revealedEmail,
    showHumanOnlyHint,
    handleContactVerified,
    onCaptchaFail,
  };
}
