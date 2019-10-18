export const applyMiddleware = (
  state: any,
  dispatch: any,
  middlewares: any[]
) => (action: any) => {
  middlewares.forEach(middleware => {
    middleware({ next: dispatch, action, state });
  });
};

// 用户自己编写的 middlewaras
/* [
  ({next: any, action: any, state: any}) => {
    // 做一些处理

    // 继续默认的 next 逻辑
    next(action);
  }
];
 */
