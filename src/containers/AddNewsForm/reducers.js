import _ from 'lodash';
import { handleActions } from 'redux-actions';
import { types } from './actions';
import { getAddNewsForm } from 'reducers';
import { combineReducers } from 'redux';

export const getForm = state => getAddNewsForm(state).form;
export const getTask = state => getAddNewsForm(state).task;

export default combineReducers({
  form: handleActions({
    [types.ADD_FORM_SAVE]: (state, { payload }) => payload,
  }, {}),

  task: handleActions({
    [types.ADD_FORM_ATTACH_TASK]: (state, { payload }) => payload,
    [types.ADD_FORM_RESET_TASK]: () => null,
  }, null),
});
