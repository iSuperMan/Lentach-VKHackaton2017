import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router';
import Layout from './components/Layout';
import AddNewsForm from 'containers/AddNewsForm';
import PublishModal from 'containers/PublishModal';
import SuccessModal from 'components/SuccessModal';
import Modal from 'containers/Modal';
import { connect } from 'react-redux';
import { auth as authAPI } from 'api';
import Main from './scenes/Main';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isInit: false,
    };
  }

  componentDidMount() {
    VK.init({
      apiId: 6228781
    });

    const userid = localStorage.getItem('userid');
    const token = localStorage.getItem('token');

    if (userid && token) {
      this.props.getUser(userid, token)
        .then(resp => {
          this.setState({ isInit: true });
        });
    } else {
      this.setState({ isInit: true });
    }
  }

  render() {
    if (!this.state.isInit)
      return null;

    return <Layout>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>

      <Modal modalId="addNews" closeIcon>
        <AddNewsForm />
      </Modal>

      <Modal modalId="publishNews">
        <PublishModal />
      </Modal>

      <Modal modalId="successModal">
        <SuccessModal />
      </Modal>
    </Layout>;
  }
}

export default connect(
  null,
  { getUser: authAPI.actions.getUser },
)(App);
