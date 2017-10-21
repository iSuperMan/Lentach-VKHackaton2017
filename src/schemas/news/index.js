import { schema } from 'normalizr';

export const newsSchema = new schema.Entity('news', {});
export const arrayOfNewsSchemas = new schema.Array(newsSchema);
