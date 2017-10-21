import PublishModal from 'components/PublishModal';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import querystring from 'query-string'

export default compose(
  withHandlers({
    onVkButtonClick: ({ postAuth }) => () => {
      const params = querystring.stringify({
        client_id: 6228781,
        redirect_uri: 'http://local.lentach.com',
        response_type: 'code',
        v: '5.68',
      });

      console.log(params);

      window.location=`https://oauth.vk.com/authorize?${params}`;
    },
  }),
)(PublishModal);
