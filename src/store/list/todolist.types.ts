export interface ITodoItem {
  id: number;
  createTime: number;
  text: string;
}

export interface IApi {
  method: string;
  url: string;
}

export interface ITodolistState {
  data: ITodoItem[];
}

export type ITodolistAction =
  | { type: 'TODOLIST_INIT'; payload: ITodoItem[]; api?: IApi }
  | { type: 'TODOLIST_CLEAR' }
  | { type: 'TODOLIST_DELETE'; payload: ITodoItem; api?: IApi }
  | { type: 'TODOLIST_ADD'; payload: ITodoItem; api?: IApi };
