import { INoticeState, INoticeAction } from './notice.types';
import { ITodolistState, ITodolistAction, IApi } from './todolist.types';

export type IState = INoticeState | ITodolistState;
export type IAction = INoticeAction | ITodolistAction;
