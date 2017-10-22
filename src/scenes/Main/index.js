import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router';
import querystring from 'query-string';
import { connect } from 'react-redux';
import TaskList from 'containers/TasksList';
import NewsList from 'containers/NewsList';
import { actions as modalActions } from 'containers/Modal';
import AddNewsButton from 'containers/AddNewsButton';
import { auth as authAPI } from 'api';
import { news as newsAPI } from 'api';
import { getIsLogin } from 'reducers/auth';

class Main extends PureComponent {
  componentDidMount() {
    const { code } = querystring.parse(this.props.location.search);

    if (code && !this.props.isLogin) {
      this.props.postAuth({
        code,
        redirect_uri: 'http://local.lentach.com',
      }).then(({ payload: { response }}) => {
        localStorage.setItem('token', response.accessToken);
        localStorage.setItem('userid', response.id);
        this.props.getNews();

        if (response.btc_wallet) {
          const newsdata = localStorage.getItem('newsdata');
          if (newsdata) {
            localStorage.removeItem('newsdata')
            const formData = JSON.parse(newsdata);

            this.props.postNews({
              description: formData.description,
              mediaIds: formData.files,
              datetime: new Date(),
              userId: response.id,
              taksId: formData.taskId,
            }).then(resp => {
              this.props.openModal('successModal');
              this.props.getNews();
            })
          }
        } else {
          this.props.openModal('walletModal');
        }
      });
    }
  }

  render() {
    return <div>
      <TaskList />
      <NewsList />
      <AddNewsButton />
    </div>;
  }
}

export default connect(
  state => ({ isLogin: getIsLogin(state) }),

  {
    postAuth: authAPI.actions.postAuth,
    postNews: newsAPI.actions.postNews,
    getNews: newsAPI.actions.getNews,
    openModal: modalActions.openModal,
  },
)(Main);
