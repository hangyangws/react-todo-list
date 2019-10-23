import request from '@utils/request';
import get from 'lodash/get';

import { IMiddleware } from 'src/hooks-store/types';
import { IAction } from './list/types';
import { IApi } from './list/todolist.types';

interface ApiType {
  api: IApi
}

const apiFetch: IMiddleware<IAction> = async ({ next, action }) => {
  const api: IApi = get(action, 'api', {})
  const payload = get(action, 'payload')

  if (api.url) {
    const { method = 'get' } = api;

    next({ type: 'LOADING_START' });
    const serverResponse = await (request as any)[method](`/todolist`);
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
