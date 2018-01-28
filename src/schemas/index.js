import api from '../api.json';
import { normalize, schema } from 'normalizr';

const media = new schema.Entity(
  'media',
  {},
  {
    idAtribute: 'id',
    processStrategy: (value, parent, key) => ({
      ...value,
      category: parent.id,
    }),
  }
);

const category = new schema.Entity('categories', {
  playlist: new schema.Array(media),
});

const categories = { categories: new schema.Array(category) };

const normalizedData = normalize(api, categories);

export default normalizedData;
