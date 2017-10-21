import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router';
import Layout from './components/Layout';
import AddNewsForm from 'containers/AddNewsForm';
import PublishModal from 'containers/PublishModal';
import Modal from 'containers/Modal';
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
  }

  render() {
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
    </Layout>;
  }
}

export default App;
