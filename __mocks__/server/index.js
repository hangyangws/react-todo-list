const Koa = require('koa');
const koaBody = require('koa-body');
const logger = require('koa-logger');
const cors = require('@koa/cors');

const router = require('./router');

const app = new Koa();

app
  .use(cors())
  .use(logger())
  .use(
    koaBody({
      multipart: true,
      encoding: 'gzip'
    })
  )
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3001);
