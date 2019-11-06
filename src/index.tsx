import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'hooks-store';

import middlewaras from '@store/middlewares';
import App from './App';
import { IState, IAction } from '@store/types';
import storeList from './store';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const Root = document.getElementById('Root');

ReactDOM.render(
  <Provider<IState, IAction> middlewares={middlewaras} stores={storeList}>
    <App />
  </Provider>,
  Root
);
