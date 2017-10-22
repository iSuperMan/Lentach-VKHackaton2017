import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers, lifecycle } from 'recompose';
import TasksList from 'components/TasksList';
import { tasks as tasksAPI } from 'api';
import { getIsFetching, getTasks } from './reducers';
import { actions as modalActions } from 'containers/Modal';
import { actions as addNewsFormActions } from 'containers/AddNewsForm';

export { default as reducers } from './reducers';

export default compose(
  connect(
    state => ({
      isFetching: getIsFetching(state),
      tasks: getTasks(state),
    }),

    {
      getTasks: tasksAPI.actions.getTasks,
      openModal: modalActions.openModal,
      attachTaskAddForm: addNewsFormActions.attachTaskAddForm,
    },
  ),

  lifecycle({
    componentDidMount() {
      this.props.getTasks();
    }
  })
)(TasksList)
