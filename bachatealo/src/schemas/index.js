import api from '../data.json';
import { normalize, schema } from 'normalizr';


const organizationData = {
  idAttribute: 'id',
  processStrategy: (value, parent, key) => ({
    ...value,
    sectionId: parent.sectionId,
  }),
};

const data = new schema.Entity('data', {}, organizationData);
const media = new schema.Entity('media', {}, organizationData);

const section =  new schema.Entity('section',
  {
    data,
    media: new schema.Array(media),
  },
  {
    idAttribute: 'sectionId',
  }
);

const sections = { sections: new schema.Array(section) };

const normalizedData = normalize(api, sections);

export default normalizedData;
