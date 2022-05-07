import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "This is the index route";
});
app.use(async (ctx, next) => {
  await next();
  console.log({ method: ctx.request.method, url: ctx.request.url });
});

app.use(router.routes());
app.use(router.allowedMethods());

console.log("Listening on port ", 8080);
await app.listen({ port: 8080 });
