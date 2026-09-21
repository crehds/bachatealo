import { matchSectionsById } from './Bachatealo';

// These fixtures only need a `data` id string; matchSectionsById passes
// each matched entry through unchanged, so nothing beyond `.data` (and
// `.sectionId`, used here purely to tell entries apart) matters to it.

describe('matchSectionsById', () => {
  it('matches every section to its key by data.id, regardless of array order', () => {
    // Deliberately not in portada/hero/history/... order — this is exactly
    // the input shape the old position-based `cont` loop got wrong.
    const shuffled = [
      { sectionId: '8', data: 'footer' },
      { sectionId: '3', data: 'history' },
      { sectionId: '1', data: 'Portada' },
      { sectionId: '6', data: 'fotos' },
      { sectionId: '9', data: 'galeria' },
      { sectionId: '2', data: 'Hero' },
      { sectionId: '5', data: 'eventos' },
      { sectionId: '7', data: 'videos' },
      { sectionId: '4', data: 'location' },
    ];

    const sections = matchSectionsById(shuffled);

    expect(sections.portada.sectionId).toBe('1');
    expect(sections.hero.sectionId).toBe('2');
    expect(sections.history.sectionId).toBe('3');
    expect(sections.location.sectionId).toBe('4');
    expect(sections.eventos.sectionId).toBe('5');
    expect(sections.galeria.sectionId).toBe('9');
    expect(sections.fotos.sectionId).toBe('6');
    expect(sections.videos.sectionId).toBe('7');
    expect(sections.footer.sectionId).toBe('8');
  });

  it('matches ids case-insensitively, since data.json already mixes Portada/Hero with lower-case ids', () => {
    const sections = matchSectionsById([
      { sectionId: '1', data: 'PORTADA' },
      { sectionId: '2', data: 'hero' },
      { sectionId: '3', data: 'History' },
      { sectionId: '4', data: 'location' },
      { sectionId: '5', data: 'eventos' },
      { sectionId: '9', data: 'GALERIA' },
      { sectionId: '6', data: 'fotos' },
      { sectionId: '7', data: 'videos' },
      { sectionId: '8', data: 'footer' },
    ]);

    expect(sections.portada.sectionId).toBe('1');
    expect(sections.hero.sectionId).toBe('2');
    expect(sections.history.sectionId).toBe('3');
    expect(sections.galeria.sectionId).toBe('9');
  });

  it('ignores a section whose id matches no known key, without disturbing the other nine', () => {
    const withUnknown = [
      { sectionId: '1', data: 'Portada' },
      { sectionId: '2', data: 'Hero' },
      { sectionId: '3', data: 'history' },
      { sectionId: '4', data: 'location' },
      { sectionId: '5', data: 'eventos' },
      { sectionId: '9', data: 'galeria' },
      { sectionId: '6', data: 'fotos' },
      { sectionId: '7', data: 'videos' },
      { sectionId: '8', data: 'footer' },
      // Not a section this component renders at all — an id that matches
      // no known key, present or future.
      { sectionId: '10', data: 'unknown-section' },
    ];

    const sections = matchSectionsById(withUnknown);

    expect(sections['unknown-section']).toBeUndefined();
    expect(sections.portada.sectionId).toBe('1');
    expect(sections.hero.sectionId).toBe('2');
    expect(sections.history.sectionId).toBe('3');
    expect(sections.location.sectionId).toBe('4');
    expect(sections.eventos.sectionId).toBe('5');
    expect(sections.galeria.sectionId).toBe('9');
    expect(sections.fotos.sectionId).toBe('6');
    expect(sections.videos.sectionId).toBe('7');
    expect(sections.footer.sectionId).toBe('8');
  });

  it('throws a clear error when data.json has no section for a required key', () => {
    const missingFooter = [
      { sectionId: '1', data: 'Portada' },
      { sectionId: '2', data: 'Hero' },
      { sectionId: '3', data: 'history' },
      { sectionId: '4', data: 'location' },
      { sectionId: '5', data: 'eventos' },
      { sectionId: '9', data: 'galeria' },
      { sectionId: '6', data: 'fotos' },
      { sectionId: '7', data: 'videos' },
      // no footer
    ];

    expect(() => matchSectionsById(missingFooter)).toThrow(/footer/);
  });
});
