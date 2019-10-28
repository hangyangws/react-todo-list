import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'hooks-store';

import middlewaras from '@store/middlewares';
import storeList from '@store/list';
import App from './App';
import { IAction, IState } from '@store/list/types';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const Root = document.getElementById('Root');

ReactDOM.render(
  <Provider<IState, IAction> middlewares={middlewaras} stores={storeList}>
    <App />
  </Provider>,
  Root
);
