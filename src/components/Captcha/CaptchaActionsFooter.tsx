type CaptchaActionsFooterProps = {
  primaryLabel: "Submit" | "Skip";
  onPrimary: () => void;
};

export function CaptchaActionsFooter({ primaryLabel, onPrimary }: CaptchaActionsFooterProps) {
  return (
    <div className="flex items-center justify-end gap-4 border-t border-[#dadce0] bg-[#f8f9fa] px-5 py-4 sm:px-8 sm:py-5">
      <button
        type="button"
        onClick={onPrimary}
        className="shrink-0 bg-[#1a73e8] px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base font-medium text-white shadow-sm hover:bg-[#174ea6] active:bg-[#185abc] transition-colors"
      >
        {primaryLabel}
      </button>
    </div>
  );
}
