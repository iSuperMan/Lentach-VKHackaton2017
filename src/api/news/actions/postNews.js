import { CALL_API, getJSON } from 'redux-api-middleware';
// import { normalize } from 'normalizr';
// import { news } from 'schemas';
import types from 'api/news/types';
import endpoints from 'api/endpoints';

export default data => ({
  [CALL_API]: {
    endpoint: endpoints.NEWS_API,
    method: 'POST',
    body: JSON.stringify(data),

    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },

    types: [
      types.POST_NEWS_REQUEST,
      types.POST_NEWS_SUCCESS,
      types.POST_NEWS_FAILURE,
    ],
  },
});
