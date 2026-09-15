// A section titled "Último evento" that advertises a date already in the past
// is worse than no section at all, so visibility is not a single switch: the
// organisers turn it on, and the event's own date turns it off again.

// Built from its parts so the date lands on local midnight. `new Date(iso)`
// parses a bare YYYY-MM-DD as UTC, which reads as the previous day anywhere
// west of Greenwich — Lima included.
export function parseEventDate(iso) {
  if (typeof iso !== 'string') {
    return null;
  }

  const [year, month, day] = iso.split('-').map(Number);

  if (!year || !month || !day) {
    return null;
  }

  const date = new Date(year, month - 1, day);

  return Number.isNaN(date.getTime()) ? null : date;
}

// An event is still worth announcing on the day it happens, so the comparison
// is against today's midnight rather than the current moment.
export function isEventVisible(eventSection, today = new Date()) {
  if (!eventSection || eventSection.active !== true) {
    return false;
  }

  const date = parseEventDate(eventSection.evento && eventSection.evento.fecha);

  if (!date) {
    return false;
  }

  const startOfToday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  return date >= startOfToday;
}

export function formatEventDate(iso) {
  const date = parseEventDate(iso);

  if (!date) {
    return '';
  }

  return date.toLocaleDateString('es-PE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

// The events entity is reached from two places that must agree on whether the
// section exists at all, so the lookup lives here rather than in either.
export function findEventSection(state) {
  return Object.values(state.data.entities.data).find(
    (entity) => entity.id === 'eventos'
  );
}
