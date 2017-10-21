import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actions } from 'containers/Modal';
import './styles.css';

class AddNewsForm extends PureComponent {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    this.props.closeModal('addNews');
    this.props.openModal('publishNews');
  }

  render() {
    return <div className="add-news-form">
      <div className="add-news-image-picker">
        <i className="fa fa-plus" aria-hidden="true"></i>
      </div>

      <div className="add-news-description">
        <textarea
          rows="3"
          name="text"
          placeholder="Добавьте описание…"
        />
      </div>

      <div className="add-news-submit">
        <button onClick={this.onSubmit}>Продолжить</button>
      </div>
    </div>;
  }
}

export default connect(
  null,

  {
    openModal: actions.openModal,
    closeModal: actions.closeModal,
  },
)(AddNewsForm);
