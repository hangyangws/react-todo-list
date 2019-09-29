import { getAll, deleteTodo, addTodo } from '@api/todolist';
import { IPromiseReturn } from '@api/types';

import { IState, IAction } from './types';

const withLoading = async (
  dispatch: React.Dispatch<IAction>,
  func: () => IPromiseReturn
) => {
  dispatch({
    type: 'LOADING_START'
  });
  const serverResponse = await func();

  dispatch({
    type: 'LOADING_STOP'
  });

  return serverResponse;
};

const applyMiddleware = ({
  dispatch
}: {
  state?: IState;
  dispatch: React.Dispatch<IAction>;
}) => async (action: IAction) => {
  switch (action.type) {
    case 'TODOLIST_FETCH': {
      const serverResponse = await withLoading(dispatch, () => getAll());

      dispatch({
        type: 'TODOLIST_INIT',
        payload: serverResponse.data
      });

      return;
    }
    case 'TODOLIST_DELETE': {
      await withLoading(dispatch, () => deleteTodo(action.payload));

      dispatch(action);

      return;
    }
    case 'TODOLIST_ADD': {
      await withLoading(dispatch, () => addTodo(action.payload));

      dispatch(action);

      return;
    }
  }

  // 继续默认的 dispatch 逻辑
  dispatch(action);
};

export default applyMiddleware;
