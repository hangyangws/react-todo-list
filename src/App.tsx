import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import Layout from '@components/Layout/index';
import Todolist from '@pages/Todolist/index';
import NotFound from '@pages/NotFound/index';
import history from './history';

import '@resource/css/base.css';

const App = () => (
  <Router history={history}>
    <Layout>
      <Switch>
        <Redirect exact from="/" to="/todolist" />
        <Route path="/todolist" component={Todolist} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </Router>
);

export default App;
