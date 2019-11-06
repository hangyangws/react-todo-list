import { setIn } from 'immutable';
import { Reducer, Store } from 'hooks-store/lib/types';

import { ITodolistState, ITodolistAction } from './index.types';

const initialState: ITodolistState = {
  data: []
};

const reducer: Reducer<ITodolistState, ITodolistAction> = (state, action) => {
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

const todolistStore: Store<ITodolistState, ITodolistAction> = {
  name: 'todolist',
  initialState,
  reducer
};

export default todolistStore;
