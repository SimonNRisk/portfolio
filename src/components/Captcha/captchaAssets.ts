import type { CaptchaTile } from "./types";

const CAPTCHA_DIR = "/images/captcha";

/** Filenames under public/images/captcha. "Simon" tiles are correct selections. */
const FILENAMES = [
  "simonthumbsup.jpg",
  "arlohike.jpg",
  "simonkpopheart.jpg",
  "simonmanny.jpg",
  "simonmchalloween.jpg",
  "simonfamily.jpg",
  "simonhsfriends.jpg",
  "brianconfused.jpg",
  "simoncochairs.jpg",
] as const;

function filenameIsSimon(filename: string): boolean {
  return filename.toLowerCase().startsWith("simon");
}

export function getCaptchaTiles(): CaptchaTile[] {
  return FILENAMES.map((name) => ({
    id: name,
    src: `${CAPTCHA_DIR}/${name}`,
    isSimon: filenameIsSimon(name),
  }));
}

export function getCorrectSimonIds(tiles: CaptchaTile[]): Set<string> {
  return new Set(tiles.filter((t) => t.isSimon).map((t) => t.id));
}
