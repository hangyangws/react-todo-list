import { setIn } from 'immutable';
import { Reducer, Store } from 'hooks-store/lib/types';

import { IState, IAction } from '@store/types';

const initialState: IState = {
  loading: false
};

const reducer: Reducer<IState, IAction> = (state, action) => {
  switch (action.type) {
    case 'LOADING_START':
      return setIn(state, ['loading'], true);
    case 'LOADING_STOP':
      return setIn(state, ['loading'], false);
  }
};

const noticeStore: Store<IState, IAction> = {
  name: 'notice',
  initialState,
  reducer
};

export default noticeStore;
