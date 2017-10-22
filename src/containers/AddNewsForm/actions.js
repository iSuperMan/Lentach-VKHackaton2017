import keyMirror from 'keymirror';
import { createAction } from 'redux-actions';

export const types = keyMirror({
  ADD_FORM_RESET: null,
  ADD_FORM_SAVE: null,
  ADD_FORM_ATTACH_TASK: null,
  ADD_FORM_RESET_TASK: null,
});

export const saveAddForm = createAction(types.ADD_FORM_SAVE);
export const resetAddForm = createAction(types.ADD_FORM_RESET);
export const attachTaskAddForm = createAction(types.ADD_FORM_ATTACH_TASK);
export const resetTaskAddForm = createAction(types.ADD_FORM_RESET_TASK);
