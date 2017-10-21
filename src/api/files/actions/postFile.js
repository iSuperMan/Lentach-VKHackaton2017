import { CALL_API, getJSON } from 'redux-api-middleware';
// import { normalize } from 'normalizr';
// import { news } from 'schemas';
import types from 'api/files/types';
import endpoints from 'api/endpoints';

export default file => {
  const formData = new FormData();
	// formData.append('data', JSON.stringify({}));
	formData.append('file', file);

  return {
    [CALL_API]: {
      endpoint: endpoints.FILES_API,
      method: 'POST',
      body: formData,

      headers: {
        Accept: 'application/json',
        // 'Content-Type': 'application/json',
      },

      types: [
        types.POST_FILE_REQUEST,
        types.POST_FILE_SUCCESS,
        types.POST_FILE_FAILURE,
      ],
    },
  };
};
