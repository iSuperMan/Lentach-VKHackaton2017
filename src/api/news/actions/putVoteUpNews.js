import { CALL_API, getJSON } from 'redux-api-middleware';
// import { normalize } from 'normalizr';
// import { news } from 'schemas';
import types from 'api/news/types';
import endpoints from 'api/endpoints';

export default data => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }

  const token = localStorage.getItem('token');

  if (token) {
    headers['Authorization'] = token;
  }

  return {
    [CALL_API]: {
      endpoint: endpoints.NEWS_VOTEUP_API,
      method: 'PUT',
      body: JSON.stringify(data),
      headers,

      types: [
        types.PUT_VOTEUP_NEWS_REQUEST,
        types.PUT_VOTEUP_NEWS_SUCCESS,
        types.PUT_VOTEUP_NEWS_FAILURE,
      ],
    },
  }
};
