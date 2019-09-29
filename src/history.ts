import { createBrowserHistory, createHashHistory } from 'history';
import { BASE_NAME } from '@config/index';
import { isDev } from '@utils/index';

const history = isDev ? createHashHistory : createBrowserHistory;

export default history({
  basename: BASE_NAME
});
