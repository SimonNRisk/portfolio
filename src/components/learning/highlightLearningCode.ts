import { getSingletonHighlighter } from "shiki";

const THEME = "github-light" as const;

/** Languages bundled for learning posts (extend as needed). */
const BUNDLED_LANGS = [
  "typescript",
  "tsx",
  "javascript",
  "jsx",
  "json",
  "bash",
  "sql",
  "python",
  "ruby",
  "yaml",
  "markdown",
  "html",
  "css",
] as const;

type BundledLang = (typeof BUNDLED_LANGS)[number];

const ALIASES: Record<string, BundledLang> = {
  ts: "typescript",
  js: "javascript",
  rb: "ruby",
  sh: "bash",
  shell: "bash",
  yml: "yaml",
  md: "markdown",
};

function resolveLang(language: string): BundledLang {
  const key = language.trim().toLowerCase();
  if (key in ALIASES) return ALIASES[key];
  if ((BUNDLED_LANGS as readonly string[]).includes(key)) return key as BundledLang;
  return "typescript";
}

let highlighterPromise: ReturnType<typeof getSingletonHighlighter> | null = null;

async function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = getSingletonHighlighter({
      themes: [THEME],
      langs: [...BUNDLED_LANGS],
    });
  }
  return highlighterPromise;
}

export async function highlightLearningCode(code: string, language: string): Promise<string> {
  const highlighter = await getHighlighter();
  const lang = resolveLang(language);
  const source = code.replace(/\n$/, "");
  try {
    return highlighter.codeToHtml(source, { lang, theme: THEME });
  } catch {
    return highlighter.codeToHtml(source, { lang: "javascript", theme: THEME });
  }
}
