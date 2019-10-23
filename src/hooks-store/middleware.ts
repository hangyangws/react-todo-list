import React from 'react';

import { IStoreData, IMiddleware } from './types';

export const applyMiddleware = <Action>(
  state: IStoreData,
  dispatch: React.Dispatch<Action>,
  middlewares: IMiddleware<Action>[]
) => (action: Action) => {
  middlewares.forEach(middleware => {
    middleware({ next: dispatch, action, state });
  });
};
