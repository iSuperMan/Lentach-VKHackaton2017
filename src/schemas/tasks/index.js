import { schema } from 'normalizr';

export const taskSchema = new schema.Entity('tasks', {});
export const arrayOfTasksSchemas = new schema.Array(taskSchema);
