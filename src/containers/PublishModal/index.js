import PublishModal from 'components/PublishModal';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { getForm } from 'containers/AddNewsForm/reducers'
import querystring from 'query-string'
import { news as newsAPI } from 'api';

export default compose(
  connect(
    state => ({ formData: getForm(state) }),
    { postNews: newsAPI.actions.postNews },
  ),

  withHandlers({
    onVkButtonClick: ({ postAuth, formData }) => () => {
      const params = querystring.stringify({
        client_id: 6228781,
        redirect_uri: 'http://local.lentach.com',
        response_type: 'code',
        v: '5.68',
      });

      // localStorage.setItem('newsdata', JSON.stringify(formData));
      console.log('formData', formData);
      console.log(params);

      window.location=`https://oauth.vk.com/authorize?${params}`;
    },

    onAnonymButtonClick: ({ postNews, formData }) => () => {
      postNews({
        description: formData.description,
        mediaIds: formData.files,
        datetime: new Date(),
      }).then(resp => {
        console.log(resp);
      });
    },
  }),
)(PublishModal);
