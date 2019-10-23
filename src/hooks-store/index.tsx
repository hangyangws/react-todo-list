import React from 'react';

import { IStoreData, IProviderProps } from './types';
import { getInitialState, getComdbinedReducer } from './utils';
import { applyMiddleware } from './middleware';

let initialState: IStoreData;
let storeCxt: React.Context<IStoreData>;
let dispatchCtx: React.Context<React.Dispatch<any>>;

const Provider = <State, Action>(props: IProviderProps<State, Action>) => {
  initialState = React.useMemo(() => getInitialState(props.stores), [
    props.stores
  ]);
  storeCxt = React.useMemo(
    () => React.createContext<IStoreData>(initialState),
    [initialState]
  );
  dispatchCtx = React.useMemo(
    () => React.createContext<React.Dispatch<any>>(() => 0),
    []
  );

  const combinedReducer = React.useMemo(
    () => getComdbinedReducer(props.stores),
    [props.stores]
  );

  const [state, dispatch] = React.useReducer(combinedReducer, initialState);

  // 让 dispatch 支持 middleware
  const enhancedDispatch =
    props.middlewares && props.middlewares.length
      ? applyMiddleware<Action>(state, dispatch, props.middlewares)
      : dispatch;

  return (
    <dispatchCtx.Provider value={enhancedDispatch as any}>
      <storeCxt.Provider value={state}>{props.children}</storeCxt.Provider>
    </dispatchCtx.Provider>
  );
};

export const useDispatch = () => React.useContext(dispatchCtx);
export const useStore = (nameSpace?: any) => {
  const store = React.useContext(storeCxt);
  return nameSpace ? store[nameSpace] : store;
};

export default Provider;
