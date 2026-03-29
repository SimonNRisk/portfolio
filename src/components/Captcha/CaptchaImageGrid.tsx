import type { CaptchaTile } from "./types";
import { CaptchaGridCell } from "./CaptchaGridCell";

type CaptchaImageGridProps = {
  tiles: CaptchaTile[];
  selectedIds: Set<string>;
  onToggle: (id: string) => void;
};

export function CaptchaImageGrid({ tiles, selectedIds, onToggle }: CaptchaImageGridProps) {
  return (
    <div className="grid grid-cols-3 gap-px bg-[#dadce0]">
      {tiles.map((tile) => (
        <CaptchaGridCell
          key={tile.id}
          src={tile.src}
          alt=""
          selected={selectedIds.has(tile.id)}
          onToggle={() => onToggle(tile.id)}
        />
      ))}
    </div>
  );
}
