import keyMirror from 'keymirror';
import { createAction } from 'redux-actions';

export const types = keyMirror({
  ADD_FORM_RESET: null,
  ADD_FORM_SAVE: null,
});

export const saveAddForm = createAction(types.ADD_FORM_SAVE);
export const resetAddForm = createAction(types.ADD_FORM_RESET);
