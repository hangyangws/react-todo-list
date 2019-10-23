export interface INoticeState {
  loading: boolean;
}

export type INoticeAction =
  | { type: 'LOADING_START' }
  | { type: 'LOADING_STOP' };
