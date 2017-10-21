import { CALL_API, getJSON } from 'redux-api-middleware';
import { normalize } from 'normalizr';
import { tasks } from 'schemas';
import types from 'api/tasks/types';
import endpoints from 'api/endpoints';

export default () => ({
  [CALL_API]: {
    endpoint: endpoints.TASKS_API,
    method: 'GET',

    types: [
      types.GET_TASKS_REQUEST,

      {
        type: types.GET_TASKS_SUCCESS,
        payload: (action, state, res) => getJSON(res)
          .then(tasksList => normalize(
            tasksList,
            tasks.arrayOfTasksSchemas,
          )),
      },

      types.GET_TASKS_FAILURE,
    ],
  },
});
