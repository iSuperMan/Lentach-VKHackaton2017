import { CALL_API, getJSON } from 'redux-api-middleware';
// import { normalize } from 'normalizr';
// import { news } from 'schemas';
import types from 'api/auth/types';
import endpoints from 'api/endpoints';

export default data => ({
  [CALL_API]: {
    endpoint: endpoints.SET_WALLET_API,
    method: 'POST',
    body: JSON.stringify(data),

    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    },

    types: [
      types.SET_WALLET_REQUEST,
      types.SET_WALLET_SUCCESS,
      types.SET_WALLET_FAILURE,
    ],
  },
});
