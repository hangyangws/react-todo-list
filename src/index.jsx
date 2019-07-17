import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/Layout/index';
import List from '@pages/List/index';
import NotFound from '@components/Layout/index';

import history from './history';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const Root = document.getElementById('Root');

ReactDOM.render(
  <Router history={history}>
    <Layout>
      <Switch>
        <Redirect exact from='/' to='/list' />
        <Route path='/list' component={List} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </Router>,
  Root
);
