type NotARobotContactProps = {
  email: string;
  verified: boolean;
  onRequestChallenge: () => void;
  showHumanHint: boolean;
};

const widgetClass =
  "flex max-w-full items-center gap-3 rounded-sm border border-[#d3d3d3] bg-[#f9f9f9] px-4 py-3 shadow-sm";

export function NotARobotContact({ email, verified, onRequestChallenge, showHumanHint }: NotARobotContactProps) {
  if (verified) {
    return (
      <div className={`${widgetClass} w-fit`}>
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border-2 border-[#0f9d58] bg-white"
          aria-hidden
        >
          <svg
            className="h-5 w-5 text-[#0f9d58]"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.4}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <a
          href={`mailto:${email}`}
          className="text-left text-sm font-medium text-gray-900 hover:text-gray-700 hover:underline break-all"
        >
          {email}
        </a>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        type="button"
        onClick={onRequestChallenge}
        className={`${widgetClass} w-fit cursor-pointer text-left transition-colors hover:bg-[#f1f1f1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900`}
        aria-label="Open verification to show contact email"
      >
        <span className="h-8 w-8 shrink-0 rounded-sm border-2 border-[#666666] bg-white" aria-hidden />
        <span className="text-sm font-medium text-gray-900">I&apos;m not a robot</span>
      </button>
      {showHumanHint ? <p className="text-sm text-gray-500">Only humans can contact me.</p> : null}
    </div>
  );
}
