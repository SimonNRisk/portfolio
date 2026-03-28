type CaptchaInstructionHeaderProps = {
  targetLabel: string;
  skipHint: string;
  headingId?: string;
};

export function CaptchaInstructionHeader({ targetLabel, skipHint, headingId }: CaptchaInstructionHeaderProps) {
  return (
    <div className="bg-[#1a73e8] text-white px-6 py-5 sm:px-8 sm:py-6">
      <p className="text-base sm:text-lg leading-tight font-normal opacity-95">Select all squares with</p>
      <h2 id={headingId} className="text-3xl sm:text-4xl font-medium leading-snug tracking-tight mt-1">
        {targetLabel}
      </h2>
      <p className="text-sm sm:text-base leading-snug mt-3 opacity-90">{skipHint}</p>
    </div>
  );
}
