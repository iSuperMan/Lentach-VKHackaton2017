import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router';
import querystring from 'query-string';
import { connect } from 'react-redux';
import TaskList from 'containers/TasksList';
import NewsList from 'containers/NewsList';
import AddNewsButton from 'containers/AddNewsButton';
import { auth as authAPI } from 'api';

class Main extends PureComponent {
  componentDidMount() {
    const { code } = querystring.parse(this.props.location.search);

    if (code) {
      this.props.postAuth(code).then(resp => {
        console.log(resp);
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
  null,
  { postAuth: authAPI.actions.postAuth },
)(Main);
