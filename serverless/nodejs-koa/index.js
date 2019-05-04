const Koa = require("koa");
const Router = require("koa-router");
const querystring = require("querystring");

const app = new Koa();
const router = new Router();

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set("X-Response-Time", `${ms}ms`);
});

router.get("/", async ctx => {
  ctx.body = "Hello from koa.js!";
});

router.get("/items", async ctx => {
  let { request } = ctx;
  const query = querystring.parse(request.querystring);

  const { page = 0 } = query;
  const items = [];
  if (page < 11) {
    for (let i = 0; i < 10; i += 1) {
      items.push({
        id: `${i + page * 10}`,
        foo: "bar"
      });
    }
  }
  ctx.body = items;
});

app.use(router.routes()).use(router.allowedMethods());

module.exports = app.callback();
