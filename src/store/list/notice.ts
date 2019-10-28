import { setIn } from 'immutable';

import { Store, Reducer } from 'src/hooks-store/types';
import { IState, IAction } from './types';

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
