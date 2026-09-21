import {
  isEventVisible,
  isGaleriaVisible,
  formatEventDate,
  parseEventDate,
  findEventSection,
} from './events';

const section = (overrides) => ({
  active: true,
  evento: { fecha: '2026-03-10' },
  ...overrides,
});

const on = (iso) => parseEventDate(iso);

describe('isEventVisible', () => {
  it('shows an upcoming event that has been switched on', () => {
    expect(isEventVisible(section(), on('2026-03-01'))).toBe(true);
  });

  it('still shows the event on the day it happens', () => {
    expect(isEventVisible(section(), on('2026-03-10'))).toBe(true);
  });

  it('hides the event once its date has passed', () => {
    expect(isEventVisible(section(), on('2026-03-11'))).toBe(false);
  });

  it('hides an upcoming event that has not been switched on', () => {
    expect(isEventVisible(section({ active: false }), on('2026-03-01'))).toBe(
      false
    );
  });

  it('treats a missing or malformed date as nothing to announce', () => {
    expect(isEventVisible(section({ evento: {} }), on('2026-03-01'))).toBe(false);
    expect(
      isEventVisible(section({ evento: { fecha: 'pronto' } }), on('2026-03-01'))
    ).toBe(false);
    expect(isEventVisible(null, on('2026-03-01'))).toBe(false);
  });

  it('does not accept a truthy non-true flag as switched on', () => {
    expect(isEventVisible(section({ active: 'false' }), on('2026-03-01'))).toBe(
      false
    );
  });
});

describe('isGaleriaVisible', () => {
  it('shows the gallery once it has been switched on', () => {
    expect(isGaleriaVisible({ active: true })).toBe(true);
  });

  it('hides the gallery while it has not been switched on', () => {
    expect(isGaleriaVisible({ active: false })).toBe(false);
    expect(isGaleriaVisible({})).toBe(false);
    expect(isGaleriaVisible(null)).toBe(false);
  });

  it('does not accept a truthy non-true flag as switched on', () => {
    expect(isGaleriaVisible({ active: 'true' })).toBe(false);
  });
});

describe('formatEventDate', () => {
  it('reads the date in the day it was written, not the day before', () => {
    // A bare YYYY-MM-DD parses as UTC midnight, which is the previous day in
    // Lima. The day number here must survive that.
    expect(formatEventDate('2019-12-21')).toContain('21');
    expect(formatEventDate('2019-12-21')).toContain('2019');
  });

  it('returns nothing it cannot format', () => {
    expect(formatEventDate(undefined)).toBe('');
    expect(formatEventDate('cuando se pueda')).toBe('');
  });
});

describe('findEventSection', () => {
  it('returns the data entity whose id is "eventos"', () => {
    const eventos = { id: 'eventos', title: 'Último evento' };
    const entities = {
      data: {
        Portada: { id: 'Portada', title: 'Portada' },
        eventos,
        footer: { id: 'footer', title: 'Footer' },
      },
    };

    expect(findEventSection(entities)).toBe(eventos);
  });

  it('returns undefined when no entity has id "eventos"', () => {
    const entities = {
      data: {
        Portada: { id: 'Portada', title: 'Portada' },
        footer: { id: 'footer', title: 'Footer' },
      },
    };

    expect(findEventSection(entities)).toBeUndefined();
  });
});
