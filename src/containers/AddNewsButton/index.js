import { compose, withProps } from 'recompose';
import { connect } from 'react-redux';
import AddNewsButton from 'components/AddNewsButton';
import { actions } from 'containers/Modal';

export default compose(
  connect(
    null,
    { openModal: actions.openModal },
  ),

  withProps(
    ({ openModal }) => ({ onClick: () => openModal('addNews') }),
  )
)(AddNewsButton);
