import React, { PureComponent } from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import { actions as modalActions } from 'containers/Modal';
import { files as filesAPI } from 'api';
import './styles.css';
import * as actions from './actions';
import reducers, { getForm, getTask } from './reducers';

export { actions, reducers };

class AddNewsForm extends PureComponent {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);

    this.state = {
      files: [],
      description: '',
    }
  }

  onSubmit() {
    const taskId = this.props.task ? this.props.task.id : null;
    this.props.saveAddForm({ ...this.state, taskId });
    this.props.closeModal('addNews');
    this.props.openModal('publishNews');
  }

  inputChangeHandler(event) {
    this.props.postFile(event.target.files[0])
      .then(({ payload: { result: { files }}}) => {
        // console.log(files);
        const id = files.file[0].name;
        let type = files.file[0].type.split('/')[0];

        if (type === 'image') {
          type = 'img';
        }

        this.setState({ files: [ ...this.state.files, { id, type } ]})
      })
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.isOpen && this.props.isOpen) {
      this.props.resetTaskAddForm();
      this.setState({
        files: [],
        description: '',
      });
    }
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

      <div className="images-wrapper">
        {this.state.files.map(file => <div
          key={file.id}
          className="image-preview"
          style={{ backgroundImage: `url("/static/media/${file.id}")` }}
          ></div>)}

          <div
            className="add-news-image-picker"
            onClick={() => $('#avatar-upload-input').click()}
            style={this.state.files.length ? { display: 'inline-block' } : {}}
          >
            <i className="fa fa-plus" aria-hidden="true"></i>
          </div>
      </div>

      <div className="add-news-description">
        <textarea
          rows="3"
          name="text"
          placeholder="Добавьте описание…"
          value={this.state.description}
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
  state => ({ form: getForm(state), task: getTask(state) }),

  {
    openModal: modalActions.openModal,
    closeModal: modalActions.closeModal,
    postFile: filesAPI.actions.postFile,
    saveAddForm: actions.saveAddForm,
    resetTaskAddForm: actions.resetTaskAddForm,
    // resetAddForm: actions.resetAddForm,
  },
)(AddNewsForm);
