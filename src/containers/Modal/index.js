import { compose, withProps } from 'recompose';
import { connect } from 'react-redux';
import Modal from 'components/Modal';
import { openModal, closeModal } from './actions';
import { getIsOpenModal } from './reducers';
import * as actions from './actions';
import reducers from './reducers';

export { actions, reducers };

export default compose(
  connect(
    (state, { modalId }) => ({
      isOpen: getIsOpenModal(state, modalId),
    }),

    { closeModal },
  ),

  withProps(
    ({ closeModal, modalId }) => ({ closeModal: () => closeModal(modalId) }),
  )
)(Modal);
