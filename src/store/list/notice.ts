import { setIn } from 'immutable';

import { IStore, IReducer } from 'src/hooks-store/types';
import { IState, IAction } from './types';

const initialState: IState = {
  loading: false
};

const reducer: IReducer<IState, IAction> = (state, action) => {
  switch (action.type) {
    case 'LOADING_START':
      return setIn(state, ['loading'], true);
    case 'LOADING_STOP':
      return setIn(state, ['loading'], false);
  }
};

const noticeStore: IStore<IState, IAction> = {
  name: 'notice',
  initialState,
  reducer
};

export default noticeStore;
