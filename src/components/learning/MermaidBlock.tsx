"use client";

import { useEffect, useId, useState } from "react";

type MermaidBlockProps = {
  diagram: string;
  caption?: string;
};

export function MermaidBlock({ diagram, caption }: MermaidBlockProps) {
  const baseId = useId().replace(/[^a-zA-Z0-9]/g, "");
  const [svg, setSvg] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      try {
        const m = (await import("mermaid")).default;
        m.initialize({
          startOnLoad: false,
          theme: "neutral",
          securityLevel: "strict",
          fontFamily: "inherit",
        });
        const { svg } = await m.render(`learning-mermaid-${baseId}`, diagram);
        if (!cancelled) {
          setSvg(svg);
          setErr(null);
        }
      } catch (e) {
        if (!cancelled) {
          setErr(e instanceof Error ? e.message : "Could not render diagram");
          setSvg(null);
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [baseId, diagram]);

  return (
    <figure className="my-8 overflow-x-auto rounded-xl border border-gray-200 bg-gray-50/90 p-4">
      {err ? (
        <pre className="whitespace-pre-wrap text-sm text-red-600">{err}</pre>
      ) : svg ? (
        <div
          className="flex justify-center text-gray-800 [&_svg]:h-auto [&_svg]:max-h-[min(28rem,70vh)] [&_svg]:max-w-full"
          // Diagram source is authored in this repo as static strings.
          dangerouslySetInnerHTML={{ __html: svg }}
        />
      ) : (
        <div className="mx-auto h-28 max-w-md animate-pulse rounded-lg bg-gray-200/80" aria-hidden />
      )}
      {caption ? <figcaption className="mt-3 text-center text-sm text-gray-500">{caption}</figcaption> : null}
    </figure>
  );
}
