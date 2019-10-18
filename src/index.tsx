import React from 'react';
import ReactDOM from 'react-dom';

import middlewaras from '@store/middlewares';
import storeList from '@store/list';
import Provider from './hooks-store';
import App from './App';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const Root = document.getElementById('Root');

ReactDOM.render(
  <Provider middlewares={middlewaras} stores={storeList}>
    <App />
  </Provider>,
  Root
);
