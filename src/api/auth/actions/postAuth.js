import { CALL_API, getJSON } from 'redux-api-middleware';
// import { normalize } from 'normalizr';
// import { news } from 'schemas';
import types from 'api/auth/types';
import endpoints from 'api/endpoints';

export default token => ({
  [CALL_API]: {
    endpoint: endpoints.AUTH_API,
    method: 'POST',
    body: JSON.stringify({ data: token }),

    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },

    types: [
      types.POST_AUTH_REQUEST,
      types.POST_AUTH_SUCCESS,
      types.POST_AUTH_FAILURE,
    ],
  },
});
