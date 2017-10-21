import keyMirror from 'keymirror';
import { createAction } from 'redux-actions';

export const types = keyMirror({
  MODAL_OPEN: null,
  MODAL_CLOSE: null,
});

export const openModal = createAction(types.MODAL_OPEN, modalId => ({ modalId }));
export const closeModal = createAction(types.MODAL_CLOSE, modalId => ({ modalId }));
