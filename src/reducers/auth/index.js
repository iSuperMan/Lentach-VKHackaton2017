import { handleActions } from 'redux-actions';
// import { denormalize } from 'normalizr';
import { createSelector } from 'reselect';
import { combineReducers } from 'redux';
import { auth as authAPI } from 'api';
import { getAuth } from 'reducers';
// import { news } from 'schemas';

// export const getIsFetching = state => getNewsSelector(state).isFetching;
//
// export const getNews = createSelector(
//   state => getNewsSelector(state).result,
//   state => getEntities(state),
//
//   (result, entities) => denormalize(
//     result,
//     news.arrayOfNewsSchemas,
//     entities,
//   ),
// );

export const getIsLogin = state => getAuth(state).isLogin;
export const getUser = state => getAuth(state).user;
export const getIsFetching = state => getAuth(state).isFetching;

export default combineReducers({
  isFetching: handleActions({
    [authAPI.types.POST_AUTH_REQUEST]: () => true,
    [authAPI.types.POST_AUTH_SUCCESS]: () => false,
    [authAPI.types.POST_AUTH_FAILURE]: () => false,

    [authAPI.types.GET_USER_REQUEST]: () => true,
    [authAPI.types.GET_USER_SUCCESS]: () => false,
    [authAPI.types.GET_USER_FAILURE]: () => false,
  }, false),

  isLogin: handleActions({
    [authAPI.types.POST_AUTH_SUCCESS]: () => true,
    [authAPI.types.GET_USER_SUCCESS]: () => true,
  }, false),

  user: handleActions({
    [authAPI.types.POST_AUTH_SUCCESS]: (state, { payload }) => payload.response,
    [authAPI.types.GET_USER_SUCCESS]: (state, { payload }) => payload,
  }, {}),
});
