import { CALL_API, getJSON } from 'redux-api-middleware';
import { normalize } from 'normalizr';
import { news } from 'schemas';
import types from 'api/news/types';
import endpoints from 'api/endpoints';

export default () => {
  const headers = {};

  const token = localStorage.getItem('token');

  if (token) {
    headers['Authorization'] = token;
  }

  return {
    [CALL_API]: {
      endpoint: endpoints.NEWS_API,
      method: 'GET',
      headers,

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
  }
};
