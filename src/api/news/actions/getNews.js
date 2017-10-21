import { CALL_API, getJSON } from 'redux-api-middleware';
import { normalize } from 'normalizr';
import { news } from 'schemas';
import types from 'api/news/types';
import endpoints from 'api/endpoints';

export default () => ({
  [CALL_API]: {
    endpoint: endpoints.NEWS_API,
    method: 'GET',

    types: [
      types.GET_NEWS_REQUEST,

      {
        type: types.GET_NEWS_SUCCESS,
        payload: (action, state, res) => getJSON(res)
          .then(newsList => normalize(
            newsList,
            news.arrayOfNewsSchemas,
          )),
      },

      types.GET_NEWS_FAILURE,
    ],
  },
});
