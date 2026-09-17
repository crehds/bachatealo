import api from '../data.json';

// Rebuilds, without normalizr, the exact shape it used to produce here:
// entities.data / entities.media keyed by their own id (each with the
// parent section's sectionId copied in), entities.section keyed by
// sectionId (data replaced by its id, media replaced by an array of ids,
// omitted entirely when the section has none), and result.sections as the
// ordered array of sectionId values.
function normalizeSections(rawApi) {
  const entities = { data: {}, media: {}, section: {} };
  const sectionIds = [];

  rawApi.sections.forEach(({ sectionId, data, media }) => {
    entities.data[data.id] = { ...data, sectionId };

    const section = { sectionId, data: data.id };

    if (media) {
      section.media = media.map((item) => {
        entities.media[item.id] = { ...item, sectionId };
        return item.id;
      });
    }

    entities.section[sectionId] = section;
    sectionIds.push(sectionId);
  });

  return { entities, result: { sections: sectionIds } };
}

export default normalizeSections(api);
