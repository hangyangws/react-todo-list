import { setIn } from 'immutable';
import { Reducer } from 'hooks-store/lib/types';

import { IState, IAction } from './types';

const initialState: IState = {
  data: []
};

const reducer: Reducer<IState, IAction> = (state, action) => {
  switch (action.type) {
    case 'TODOLIST_INIT':
      return setIn(state, ['data'], action.payload);
    case 'TODOLIST_CLEAR':
      return setIn(state, ['data'], []);
    case 'TODOLIST_DELETE': {
      const newTodolist = state.data.filter(
        todo => todo.id !== action.payload.id
      );
      return setIn(state, ['data'], newTodolist);
    }
    case 'TODOLIST_ADD': {
      const newTodolist = [...state.data, action.payload];
      return setIn(state, ['data'], newTodolist);
    }
  }
};

const todolistStore: Store<IState, IAction> = {
  name: 'todolist',
  initialState,
  reducer
};

export default todolistStore;
