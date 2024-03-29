import React from 'react';
import { withHandlers } from 'recompose';
import './styles.css';

const Modal = (props) => {
  if (props.bigModal) {
    return <div
      className="i-modal-big"
      style={props.isOpen ? { display: 'block' } : {}}
    >
      <div className="i-modal-big-content">
        {React.cloneElement(props.children, { isOpen: props.isOpen })}
      </div>
    </div>;
  }

  return <div
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
        {React.cloneElement(props.children, { isOpen: props.isOpen })}
      </div>
    </div>
  </div>;
}

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
