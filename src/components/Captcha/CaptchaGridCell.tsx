import Image from "next/image";

type CaptchaGridCellProps = {
  src: string;
  alt: string;
  selected: boolean;
  onToggle: () => void;
};

export function CaptchaGridCell({ src, alt, selected, onToggle }: CaptchaGridCellProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={selected}
      className={[
        "relative aspect-square w-full overflow-hidden outline-none",
        "border-2 transition-[border-color,box-shadow] duration-150",
        selected ? "border-white ring-2 ring-[#1a73e8] z-10" : "border-[#dadce0] hover:border-[#80868b]",
      ].join(" ")}
    >
      <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 640px) 31vw, 200px" />
      {selected ? (
        <span
          className="absolute bottom-2 right-2 flex h-5 w-5 items-center justify-center bg-[#1a73e8] text-white shadow"
          aria-hidden
        >
          <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
      ) : null}
    </button>
  );
}
