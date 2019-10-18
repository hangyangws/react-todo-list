import axios, { AxiosInstance } from 'axios';

import { apiHost } from '@config/index';

const request = axios.create();

export const setRequestBaseInfo = (requestInstance: AxiosInstance) => {
  requestInstance.defaults.baseURL = apiHost;
  requestInstance.defaults.timeout = 3000;
};

// 设置请求基本信息
setRequestBaseInfo(request);

export default request;
