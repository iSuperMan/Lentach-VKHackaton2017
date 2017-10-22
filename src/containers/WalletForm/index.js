import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actions as modalActions } from 'containers/Modal';
import { auth as authAPI, news as newsAPI  } from 'api';
import { getIsLogin, getUser } from 'reducers/auth';
import './styles.css';

class WalletForm extends PureComponent {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      wallet: '',
    }
  }

  onSubmit() {
    this.props.postSetWallet({ value: this.state.wallet, userId: this.props.user.id })
      .then(() => {
        this.props.closeModal('walletModal');

        const newsdata = localStorage.getItem('newsdata');
        if (newsdata) {
          localStorage.removeItem('newsdata')
          const formData = JSON.parse(newsdata);

          this.props.postNews({
            description: formData.description,
            mediaIds: formData.files,
            datetime: new Date(),
            userId: this.props.user.id,
            taksId: formData.taskId,
          }).then(resp => {
            this.props.openModal('successModal');
            this.props.getNews();
          })
        }
      });
  }

  render() {
    return <div className="wallet-form">
      <div className="wallet-form-header">
        Введите номер биткоин-кошелька
      </div>

      <div className="wallet-form-input">
        <input
          value={this.state.wallet}
          onChange={(text) => this.setState({ wallet: text.target.value })}
          placeholder="Номер биткоин-кошелька"
        />
      </div>

      <div className="wallet-form-submit">
        <button onClick={this.onSubmit}>Продолжить</button>
      </div>
    </div>;
  }
}

export default connect(
  state => ({ user: getUser(state) }),

  {
    postSetWallet: authAPI.actions.postSetWallet,
    postNews: newsAPI.actions.postNews,
    getNews: newsAPI.actions.getNews,
    openModal: modalActions.openModal,
    closeModal: modalActions.closeModal,
  },
)(WalletForm);
