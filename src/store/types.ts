import { INoticeState, INoticeAction } from './notice/index.types';
import { ITodolistState, ITodolistAction } from './list/index.types';

export type IState = INoticeState | ITodolistState;
export type IAction = INoticeAction | ITodolistAction;
