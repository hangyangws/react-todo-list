const Router = require('koa-router');

const { delay } = require('./utils');
const todolist = require('./todolist');

const router = new Router();

router
  .get('/todolist', async ctx => {
    await delay(() => {
      ctx.body = todolist;
    });
  })
  .delete('/todolist', async ctx => {
    await delay(() => {
      ctx.body = 'success';
    });
  })
  .post('/todolist', async ctx => {
    await delay(() => {
      ctx.body = 'success';
    });
  });

module.exports = router;
