import { useEffect, useRef, useState } from 'react';
import { pickActiveHref } from './activeSection';

function readTargets(hrefs) {
  return hrefs.reduce((targets, href) => {
    // Menu ids are numeric (`#3`), which is an invalid CSS selector for
    // querySelector — getElementById sidesteps that entirely.
    const el = document.getElementById(href.slice(1));
    if (el) targets.push({ href, top: el.getBoundingClientRect().top });
    return targets;
  }, []);
}

function computeActiveHref(hrefs) {
  // The activation line is the bottom of the fixed bar, not a fixed pixel
  // value, so it tracks the bar's real height (e.g. across breakpoints).
  const bar = document.querySelector('.header-bar');
  const line = bar ? bar.getBoundingClientRect().bottom : 0;

  // Only a page that actually scrolls can be at its bottom: one no taller
  // than the viewport passes the second check at scroll position 0, and
  // would light the lowest link before the visitor has moved at all.
  const { scrollHeight } = document.documentElement;
  const atBottom =
    scrollHeight > window.innerHeight &&
    window.innerHeight + window.scrollY >= scrollHeight - 2;

  return pickActiveHref(readTargets(hrefs), line, atBottom);
}

// Highlights the nav link for whichever section the fixed header bar is
// currently sitting over. This hook only owns the DOM reads and the
// scroll/resize wiring; the activation decision itself is pickActiveHref.
export default function useActiveSection(hrefs) {
  const [activeHref, setActiveHref] = useState(undefined);
  // hrefs is a fresh array every render (HeaderContainer re-filters the
  // menu each time), so the effect keys off a stable string instead of
  // tearing its listeners down and rebuilding them on every render.
  const hrefsRef = useRef(hrefs);
  hrefsRef.current = hrefs;
  const hrefsKey = hrefs.join('|');

  useEffect(() => {
    // Local to this effect run, not a ref: a frame left pending by a
    // previous run can never block this one's first computation.
    let frame = null;

    // React skips the re-render when the href is unchanged, so scrolling
    // within one section costs a DOM read and nothing more.
    const recompute = () => setActiveHref(computeActiveHref(hrefsRef.current));

    // Mount, scroll and resize all funnel through the same throttle: at
    // most one computation per animation frame, since none of them can
    // usefully fire faster than the browser repaints.
    const requestRecompute = () => {
      if (frame !== null) return;

      if (typeof window.requestAnimationFrame !== 'function') {
        // No rAF in this environment — recompute right away rather than
        // silently never scheduling anything.
        recompute();
        return;
      }

      frame = window.requestAnimationFrame(() => {
        frame = null;
        recompute();
      });
    };

    requestRecompute(); // mount

    window.addEventListener('scroll', requestRecompute, { passive: true });
    window.addEventListener('resize', requestRecompute);

    return () => {
      window.removeEventListener('scroll', requestRecompute);
      window.removeEventListener('resize', requestRecompute);
      if (frame !== null && typeof window.cancelAnimationFrame === 'function') {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [hrefsKey]);

  return activeHref;
}
