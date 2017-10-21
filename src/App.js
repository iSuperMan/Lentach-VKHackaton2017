import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import Layout from './components/Layout';
import AddNewsForm from 'containers/AddNewsForm';
import PublishModal from 'components/PublishModal';
import Modal from 'containers/Modal';
import Main from './scenes/Main';

const App = () => <Layout>
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

export default App;
