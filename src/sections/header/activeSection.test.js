import { pickActiveHref } from './activeSection';

it('falls back to the first target in the list when none has passed the line', () => {
  const targets = [
    { href: '#1', top: 100 },
    { href: '#4', top: 200 },
  ];

  expect(pickActiveHref(targets, 0, false)).toBe('#1');
});

it('picks the greatest passed top, regardless of the targets array order', () => {
  const inOrder = [
    { href: '#1', top: -500 },
    { href: '#4', top: -10 },
    { href: '#6', top: -50 },
    { href: '#7', top: 300 }, // has not passed the line
  ];
  const shuffled = [inOrder[3], inOrder[1], inOrder[0], inOrder[2]];

  expect(pickActiveHref(inOrder, 80, false)).toBe('#4');
  expect(pickActiveHref(shuffled, 80, false)).toBe('#4');
});

it('at the bottom of the page picks the greatest top overall, ignoring the line', () => {
  const targets = [
    { href: '#1', top: -900 },
    { href: '#7', top: 50 }, // has not passed the line, but is still lowest on the page
  ];

  expect(pickActiveHref(targets, 0, true)).toBe('#7');
});

it('returns undefined for an empty target list', () => {
  expect(pickActiveHref([], 80, false)).toBeUndefined();
});
