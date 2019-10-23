import { IStoreData, IStore } from './types';

export const getInitialState = <State, Action>(
  stores: IStore<State, Action>[]
): IStoreData =>
  stores.reduce(
    (pre, cur) => ({
      ...pre,
      [cur.name]: cur.initialState
    }),
    {}
  );

export const getComdbinedReducer = <State, Action>(
  stores: IStore<State, Action>[]
) => (state: IStoreData, action: Action): IStoreData => {
  let index = 0;

  while (index < stores.length) {
    const currentStore = stores[index];
    const currentState = state[currentStore.name];
    const nextCurrentState = currentStore.reducer(currentState, action);

    if (nextCurrentState) {
      return {
        ...state,
        [currentStore.name]: nextCurrentState
      };
    }

    index++;
  }

  return state;
};
