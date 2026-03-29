"use client";

import { NotARobotContact } from "@/components/NotARobotContact";

type ContactSectionProps = {
  revealedEmail: string | null;
  onContactClick: () => void;
  showHumanOnlyHint: boolean;
};

export default function ContactSection({
  revealedEmail,
  onContactClick,
  showHumanOnlyHint,
}: ContactSectionProps) {
  return (
    <section id="contact" className="py-32 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900 tracking-tight">Let&apos;s Work Together</h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          I&apos;m always interested in hearing about new projects and opportunities. Let&apos;s work together to create
          something amazing!
        </p>
        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:items-start sm:space-x-6">
            <NotARobotContact
              email={revealedEmail ?? ""}
              verified={revealedEmail !== null}
              onRequestChallenge={onContactClick}
              showHumanHint={showHumanOnlyHint && revealedEmail === null}
            />
            <a
              href="https://www.linkedin.com/in/simon-risk/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-50 transition-all duration-300 text-lg font-medium border border-gray-200 hover:border-gray-300 sm:self-center"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
