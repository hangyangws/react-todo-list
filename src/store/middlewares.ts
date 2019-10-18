import request from '@utils/request';

const apiFetch = async ({ next, action }: any) => {
  if (action.api && action.api.url) {
    const { method = 'get' } = action.api;

    next({ type: 'LOADING_START' });
    const serverResponse = await (request as any)[method](`/todolist`);
    next({ type: 'LOADING_STOP' });

    const nextAction = {
      ...action,
      payload: action.payload || serverResponse.data
    };

    delete nextAction.api;

    next(nextAction);
  } else {
    next(action);
  }
};

const middlewaras: any = [apiFetch];

export default middlewaras;
