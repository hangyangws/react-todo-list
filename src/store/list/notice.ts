import { setIn } from 'immutable';

const noticeStore = {
  name: 'notice',
  initialState: {
    loading: false
  },
  reducer: (state: any, action: any) => {
    console.log('进入 notice reducer');
    switch (action.type) {
      case 'LOADING_START':
        return setIn(state, ['loading'], true);
      case 'LOADING_STOP':
        return setIn(state, ['loading'], false);
    }
  }
};

export default noticeStore;
