import { handleActions } from 'redux-actions';
import { denormalize } from 'normalizr';
import { createSelector } from 'reselect';
import { combineReducers } from 'redux';
import { tasks as tasksAPI } from 'api';
import { getTasks as getTasksSelector, getEntities } from 'reducers';
import { tasks } from 'schemas';

export const getIsFetching = state => getTasks(state).isFetching;

export const getTasks = createSelector(
  state => getTasksSelector(state).result,
  state => getEntities(state),

  (result, entities) => denormalize(
    result,
    tasks.arrayOfTasksSchemas,
    entities,
  ),
);

export default combineReducers({
  isFetching: handleActions({
    [tasksAPI.types.GET_TASKS_REQUEST]: () => true,
    [tasksAPI.types.GET_TASKS_SUCCESS]: () => false,
    [tasksAPI.types.GET_TASKS_FAILURE]: () => false,
  }, false),

  result: handleActions({
    [tasksAPI.types.GET_TASKS_SUCCESS]: (state, { payload: { result } }) => result,
  }, []),
});
