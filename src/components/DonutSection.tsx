import AsciiDonut from "@/components/AsciiDonut";

export default function DonutSection() {
  return (
    <section className="py-6 px-4">
      <div className="flex flex-col items-center">
        <AsciiDonut />
        <div className="flex items-center gap-1 text-sm text-gray-600 mt-2 animate-bounce">
          <span className="text-lg">↑</span>
          <span className="italic font-medium">drag me</span>
        </div>
      </div>
    </section>
  );
}
