import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import Layout from './components/Layout';
import Main from './scenes/Main';

const App = () => <Layout>
  <Switch>
    <Route path="/" component={Main} />
  </Switch>
</Layout>;

export default App;
