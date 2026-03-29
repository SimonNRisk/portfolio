export function setsEqual(ids: Set<string>, correct: Set<string>): boolean {
  if (ids.size !== correct.size) return false;
  return Array.from(ids).every((id) => correct.has(id));
}
