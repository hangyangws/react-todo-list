import { setIn } from 'immutable';

import { IState, IReducer } from './types';

export const initialState: IState = {
  todolist: {
    total: 0,
    data: []
  },
  notice: {
    loading: false
  }
};

const reducer: IReducer = (state, action) => {
  state = state || [];

  switch (action.type) {
    case 'TODOLIST_INIT':
      return setIn(state, ['todolist', 'data'], action.payload);
    case 'TODOLIST_CLEAR':
      return setIn(state, ['todolist', 'data'], []);
    case 'TODOLIST_DELETE': {
      const newTodolist = state.todolist.data.filter(
        todo => todo.id !== action.payload.id
      );
      return setIn(state, ['todolist', 'data'], newTodolist);
    }
    case 'TODOLIST_ADD': {
      const newTodolist = [...state.todolist.data, action.payload];
      return setIn(state, ['todolist', 'data'], newTodolist);
    }
    case 'LOADING_START':
      return setIn(state, ['notice', 'loading'], true);
    case 'LOADING_STOP':
      return setIn(state, ['notice', 'loading'], false);
    default:
      return state;
  }
};

export default reducer;
