import request from '@utils/request';
import get from 'lodash/get';
import { Middleware } from 'hooks-store/lib/types';

import { IAction } from './list/types';
import { IApi } from './list/todolist.types';

interface ApiType {
  api: IApi;
}

const apiFetch: Middleware<IAction> = async ({ next, action }) => {
  const api: IApi = get(action, 'api', {});
  const payload = get(action, 'payload');

  if (api.url) {
    const { method = 'get' } = api;

    next({ type: 'LOADING_START' });
    const serverResponse = await (request as any)[method](api.url);
    next({ type: 'LOADING_STOP' });

    const nextAction = {
      ...action,
      payload: payload || serverResponse.data
    };

    delete (nextAction as ApiType).api;

    next(nextAction);
  } else {
    next(action);
  }
};

const middlewaras = [apiFetch];

export default middlewaras;
