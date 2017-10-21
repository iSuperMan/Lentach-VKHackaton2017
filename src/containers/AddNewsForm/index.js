import React, { PureComponent } from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import { actions } from 'containers/Modal';
import { files as filesAPI } from 'api';
import './styles.css';

class AddNewsForm extends PureComponent {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);

    this.state = {
      files: [],
    }
  }

  onSubmit() {
    this.props.closeModal('addNews');
    this.props.openModal('publishNews');
  }

  inputChangeHandler(event) {
    this.props.postFile(event.target.files[0])
      .then(({ payload: { result: { files }}}) => {
        this.setState({ files: [ ...this.state.files, files.file[0].name ]})
      })
  }

  render() {
    return <div className="add-news-form">
      <input
        type="file"
        name="hello"
        id="avatar-upload-input"
        onChange={this.inputChangeHandler}
        style={{ display: 'none' }}
      />

      <div className="add-news-image-picker" onClick={() => $('#avatar-upload-input').click()}>
        <i className="fa fa-plus" aria-hidden="true"></i>
      </div>

      <div className="add-news-description">
        <textarea
          rows="3"
          name="text"
          placeholder="Добавьте описание…"
          onChange={(text) => this.setState({ description: text.target.value })}
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
    postFile: filesAPI.actions.postFile,
  },
)(AddNewsForm);
