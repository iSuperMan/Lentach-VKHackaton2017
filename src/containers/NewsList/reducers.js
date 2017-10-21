import { handleActions } from 'redux-actions';
import { denormalize } from 'normalizr';
import { createSelector } from 'reselect';
import { combineReducers } from 'redux';
import { news as newsAPI } from 'api';
import { getNews as getNewsSelector, getEntities } from 'reducers';
import { news } from 'schemas';

export const getIsFetching = state => getNewsSelector(state).isFetching;

export const getNews = createSelector(
  state => getNewsSelector(state).result,
  state => getEntities(state),

  (result, entities) => denormalize(
    result,
    news.arrayOfNewsSchemas,
    entities,
  ),
);

export default combineReducers({
  isFetching: handleActions({
    [newsAPI.types.GET_NEWS_REQUEST]: () => true,
    [newsAPI.types.GET_NEWS_SUCCESS]: () => false,
    [newsAPI.types.GET_NEWS_FAILURE]: () => false,
  }, false),

  result: handleActions({
    [newsAPI.types.GET_NEWS_SUCCESS]: (state, { payload: { result } }) => result,
  }, []),
});
