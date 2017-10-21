import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers, lifecycle } from 'recompose';
import TasksList from 'components/TasksList';
import { tasks as tasksAPI } from 'api';
import { getIsFetching, getTasks } from './reducers';

export { default as reducers } from './reducers';

export default compose(
  connect(
    state => ({
      isFetching: getIsFetching(state),
      tasks: getTasks(state),
    }),

    { getTasks: tasksAPI.actions.getTasks },
  ),

  lifecycle({
    componentDidMount() {
      this.props.getTasks();
    }
  })
)(TasksList)
