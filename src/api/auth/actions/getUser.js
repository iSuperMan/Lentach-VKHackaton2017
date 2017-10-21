import { CALL_API, getJSON } from 'redux-api-middleware';
import { normalize } from 'normalizr';
import { news } from 'schemas';
import types from 'api/auth/types';
import endpoints from 'api/endpoints';

export default (id, token) => ({
  [CALL_API]: {
    endpoint: endpoints.USERS_API.replace(':id', id),
    method: 'GET',

    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: token,
    },

    types: [
      types.GET_USER_REQUEST,
      types.GET_USER_SUCCESS,
      types.GET_USER_FAILURE,
    ],
  },
});
