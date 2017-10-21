import React from 'react';
import { withHandlers } from 'recompose';
import './styles.css';

const Modal = (props) => <div
  className="i-modal"
  onClick={props.onOutsideclick}
  style={props.isOpen ? { display: 'block' } : {}}
>
  <div
    className="i-modal-content"
    onClick={props.onModalClick}
  >
    {props.closeIcon && <span className="i-modal-close" onClick={props.onCloseclick}>&times;</span>}
    <div className="i-modal-main-content">
      {props.children}
    </div>
  </div>
</div>;

export default withHandlers({
  onOutsideclick: ({ closeModal }) => (event) => {
    event.stopPropagation();
    closeModal();
  },

  onCloseclick: ({ closeModal }) => (event) => {
    event.stopPropagation();
    closeModal();
  },

  onModalClick: () => (event) => {
    event.stopPropagation();
  },
})(Modal);
