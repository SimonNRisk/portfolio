import AsciiDonut from "@/components/AsciiDonut";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function DonutSection() {
  const isMobile = useIsMobile();

  return (
    <section className="py-6 px-4">
      <div className="flex flex-col items-center">
        <AsciiDonut />
        {!isMobile && (
          <div className="flex items-center gap-1 text-sm text-gray-600 mt-2 animate-bounce">
            <span className="text-lg">↑</span>
            <span className="italic font-medium">drag me</span>
          </div>
        )}
      </div>
    </section>
  );
}
