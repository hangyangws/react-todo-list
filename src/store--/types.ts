// export interface INotice {
//   loading: boolean;
// }

// export interface ITodo {
//   id: number;
//   text: string;
//   createTime: number;
// }

// export interface ITodoList {
//   total: number;
//   data: ITodo[];
// }

// export interface IState {
//   todolist: ITodoList;
//   notice: INotice;
// }

// export type IAction =
//   | { type: 'TODOLIST_FETCH' }
//   | { type: 'TODOLIST_INIT'; payload: ITodo[] }
//   | { type: 'TODOLIST_CLEAR' }
//   | { type: 'TODOLIST_DELETE'; payload: ITodo }
//   | { type: 'TODOLIST_ADD'; payload: ITodo }
//   | { type: 'LOADING_START' }
//   | { type: 'LOADING_STOP' };

// export type IReducer = (state: IState, action: IAction) => IState;
