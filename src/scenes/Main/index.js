import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router';
import querystring from 'query-string';
import { connect } from 'react-redux';
import TaskList from 'containers/TasksList';
import NewsList from 'containers/NewsList';
import AddNewsButton from 'containers/AddNewsButton';
import { auth as authAPI } from 'api';
import { getIsLogin } from 'reducers/auth';

class Main extends PureComponent {
  componentDidMount() {
    const { code } = querystring.parse(this.props.location.search);

    if (code && !this.props.isLogin) {
      this.props.postAuth({
        code,
        redirect_uri: 'http://local.lentach.com',
      }).then(({ payload: { response }}) => {
        console.log(response);
        localStorage.setItem('token', response.accessToken);
        localStorage.setItem('userid', response.id);
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
  },
)(Main);
