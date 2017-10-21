import _ from 'lodash';
import { handleActions } from 'redux-actions';
import { types } from './actions';
import { getModal as getModalSelector } from 'reducers';

export const getIsOpenModal = (state, modalId) => _.get(getModalSelector(state), modalId, false);

export default handleActions({
  [types.MODAL_OPEN]: (state, { payload: { modalId }}) => {
    document.body.style.overflow = 'hidden';

    return {
      ...state,
      [modalId]: true,
    };
  },

  [types.MODAL_CLOSE]: (state, { payload: { modalId }}) => {
    document.body.style.overflow = 'auto';

    return {
      ...state,
      [modalId]: false,
    };
  },
}, {});
