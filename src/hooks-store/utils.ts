import { IStoreData, IStore } from './types';

export const getInitialState = (storeList: IStore[]): IStoreData =>
  storeList.reduce(
    (pre, cur) => ({
      ...pre,
      [cur.name]: cur.initialState
    }),
    {}
  );

export const getComdbinedReducer = (stores: IStore[]) => (
  state: any,
  action: any
) => {
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
