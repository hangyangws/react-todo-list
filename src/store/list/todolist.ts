import { setIn } from 'immutable';

const todolistStore = {
  name: 'todolist',
  initialState: {
    data: []
  },
  reducer: (state: any, action: any) => {
    switch (action.type) {
      case 'TODOLIST_INIT':
        return setIn(state, ['data'], action.payload);
      case 'TODOLIST_CLEAR':
        return setIn(state, ['data'], []);
      case 'TODOLIST_DELETE': {
        const newTodolist = state.data.filter(
          (todo: any) => todo.id !== action.payload.id
        );
        return setIn(state, ['data'], newTodolist);
      }
      case 'TODOLIST_ADD': {
        const newTodolist = [...state.data, action.payload];
        return setIn(state, ['data'], newTodolist);
      }
    }
  }
};

export default todolistStore;
