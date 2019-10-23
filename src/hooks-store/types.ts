import React from 'react';


export interface IStoreData {
  [name: string]: any;
}

export type IMiddleware<Action> = ({
  next,
  action,
  state
}: {
  next: React.Dispatch<Action>;
  action: Action;
  state?: IStoreData;
}) => void;

export type IReducer<State, Action> = (state: State, action: Action) => State | undefined;

export interface IStore<State, Action> {
  name: string;
  initialState: State;
  reducer: IReducer<State, Action>;
}

export interface IProviderProps<State, Action> {
  stores: IStore<State, Action>[];
  middlewares?: IMiddleware<Action>[];
  children: JSX.Element[] | JSX.Element | React.ReactNode;
}
