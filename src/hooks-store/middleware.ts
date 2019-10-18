export const applyMiddleware = (
  state: any,
  dispatch: any,
  middlewares: any[]
) => (action: any) => {
  middlewares.forEach(middleware => {
    middleware({ next: dispatch, action, state });
  });
};
