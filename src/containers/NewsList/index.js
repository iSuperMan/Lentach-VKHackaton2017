import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers, lifecycle } from 'recompose';
import NewsList from 'components/NewsList';
import { news as newsAPI } from 'api';
import { getIsFetching, getNews } from './reducers';

export { default as reducers } from './reducers';

export default compose(
  connect(
    state => ({
      isFetching: getIsFetching(state),
      news: getNews(state),
    }),

    { getNews: newsAPI.actions.getNews },
  ),

  lifecycle({
    componentDidMount() {
      this.props.getNews();
    }
  })
)(NewsList)
