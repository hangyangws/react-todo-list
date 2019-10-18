// TODO：any type 待修改
type IInitialState = any;
type IState = any;
type IAction = any;
type IMiddleware = any;

export type IReducer = (state: IState, action: IAction) => IState;

export interface IStore {
  name: string;
  initialState: IInitialState;
  reducer: IReducer;
}

export interface IProviderProps {
  stores: IStore[];
  middlewares?: IMiddleware[];
  children: JSX.Element[] | JSX.Element | React.ReactNode;
}

export interface IStoreData {
  [name: string]: IInitialState;
}
