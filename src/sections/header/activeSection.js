// Pure decision: given each nav target's current top position (relative to
// the viewport, same units as getBoundingClientRect), which link should be
// highlighted. No DOM access here, so the activation math is testable on
// its own, independent of scroll/resize/rAF plumbing.
export function pickActiveHref(targets, line, atBottom) {
  if (targets.length === 0) return undefined;

  // A short last section could sit entirely above the activation line and
  // never "pass" it, so at the bottom of the page the lowest section wins
  // outright instead of falling through to "none passed".
  if (atBottom) {
    return targets.reduce((lowest, t) => (t.top > lowest.top ? t : lowest))
      .href;
  }

  const passed = targets.filter((t) => t.top <= line);
  if (passed.length === 0) return targets[0].href;

  // The most recently passed section is the one with the greatest top
  // (closest to the line), regardless of where it sits in the menu.
  return passed.reduce((latest, t) => (t.top > latest.top ? t : latest)).href;
}
