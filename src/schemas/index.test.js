import siteData from './index';

// These expectations are hand-authored from reading src/data.json, not
// produced by calling this module — that would make this test worthless
// for the one thing it exists to guard: swapping normalizr for a local
// function underneath the exact same shape.

it('orders sections exactly as declared in data.json', () => {
  expect(siteData.result.sections).toEqual([
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
  ]);
});

it('wires each section to its data id and, where present, its media ids', () => {
  // A section with no media array in data.json (portada, location, eventos,
  // footer) omits the `media` key entirely rather than defaulting it to an
  // empty array — that absence is part of the shape.
  expect(siteData.entities.section).toEqual({
    '1': { sectionId: '1', data: 'Portada' },
    '2': {
      sectionId: '2',
      data: 'Hero',
      media: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    },
    '3': { sectionId: '3', data: 'history', media: ['10', '11'] },
    '4': { sectionId: '4', data: 'location' },
    '5': { sectionId: '5', data: 'eventos' },
    '6': {
      sectionId: '6',
      data: 'fotos',
      media: ['12', '13', '14', '15', '16', '17'],
    },
    '7': { sectionId: '7', data: 'videos', media: ['18', '19'] },
    '8': { sectionId: '8', data: 'footer' },
  });
});

it('injects the parent sectionId into every data entity', () => {
  const sectionIdOf = (id) => siteData.entities.data[id].sectionId;

  expect(sectionIdOf('Portada')).toBe('1');
  expect(sectionIdOf('Hero')).toBe('2');
  expect(sectionIdOf('history')).toBe('3');
  expect(sectionIdOf('location')).toBe('4');
  expect(sectionIdOf('eventos')).toBe('5');
  expect(sectionIdOf('fotos')).toBe('6');
  expect(sectionIdOf('videos')).toBe('7');
  expect(sectionIdOf('footer')).toBe('8');
});

it('injects the parent sectionId into every media entity', () => {
  const sectionIdOf = (id) => siteData.entities.media[id].sectionId;

  ['1', '2', '3', '4', '5', '6', '7', '8', '9'].forEach((id) =>
    expect(sectionIdOf(id)).toBe('2')
  );
  ['10', '11'].forEach((id) => expect(sectionIdOf(id)).toBe('3'));
  ['12', '13', '14', '15', '16', '17'].forEach((id) =>
    expect(sectionIdOf(id)).toBe('6')
  );
  ['18', '19'].forEach((id) => expect(sectionIdOf(id)).toBe('7'));
});
