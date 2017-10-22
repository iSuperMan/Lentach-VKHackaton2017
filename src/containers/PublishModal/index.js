import PublishModal from 'components/PublishModal';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { getForm } from 'containers/AddNewsForm/reducers'
import { actions as modalActions } from 'containers/Modal';
import querystring from 'query-string'
import { news as newsAPI } from 'api';
import { getIsLogin, getUser } from 'reducers/auth';

export default compose(
  connect(
    state => ({ formData: getForm(state), isLogin: getIsLogin(state), user: getUser(state) }),
    {
      postNews: newsAPI.actions.postNews,
      getNews: newsAPI.actions.getNews,
      openModal: modalActions.openModal,
      closeModal: modalActions.closeModal,
    },
  ),

  withHandlers({
    onVkButtonClick: ({ getNews, postNews, postAuth, formData, isLogin, user, closeModal, openModal }) => () => {
      if (isLogin) {
        console.log('isLogin request');
        postNews({
          description: formData.description,
          mediaIds: formData.files,
          datetime: new Date(),
          taksId: formData.taskId,
          userId: user.id,
        }).then(resp => {
          console.log(resp);
          closeModal('publishNews');
          openModal('successModal');

          getNews();
          localStorage.removeItem('token')
          localStorage.removeItem('userid')
        });
      } else {
        const params = querystring.stringify({
          client_id: 6228781,
          redirect_uri: 'http://local.lentach.com',
          response_type: 'code',
          v: '5.68',
        });

        localStorage.setItem('newsdata', JSON.stringify(formData));
        window.location=`https://oauth.vk.com/authorize?${params}`;
      }
    },

    onAnonymButtonClick: ({ getNews, postNews, formData, closeModal, openModal }) => () => {
      postNews({
        description: formData.description,
        mediaIds: formData.files,
        taksId: formData.taskId,
        datetime: new Date(),
      }).then(resp => {
        console.log(resp);
        closeModal('publishNews');
        openModal('successModal');
        getNews();
      });
    },
  }),
)(PublishModal);
