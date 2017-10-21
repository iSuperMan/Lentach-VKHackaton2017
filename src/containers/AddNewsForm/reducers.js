import _ from 'lodash';
import { handleActions } from 'redux-actions';
import { types } from './actions';
import { getAddNewsForm } from 'reducers';
import { combineReducers } from 'redux';

export const getForm = state => getAddNewsForm(state);

export default handleActions({
  [types.ADD_FORM_SAVE]: (state, { payload }) => payload,
}, {});
