import { setIn } from 'immutable';
import { Reducer, Store } from 'hooks-store/lib/types';

import { INoticeState, INoticeAction } from './index.types';

const initialState: INoticeState = {
  loading: false
};

const reducer: Reducer<INoticeState, INoticeAction> = (state, action) => {
  switch (action.type) {
    case 'LOADING_START':
      return setIn(state, ['loading'], true);
    case 'LOADING_STOP':
      return setIn(state, ['loading'], false);
  }
};

const noticeStore: Store<INoticeState, INoticeAction> = {
  name: 'notice',
  initialState,
  reducer
};

export default noticeStore;
