import { Application, Router } from "https://deno.land/x/oak/mod.ts";
const router = new Router();

router.get("/", async (context) => {
  const result = await fetch("https://api.kawalcorona.com/indonesia/provinsi");
  const response = await result.json();
  context.response.body = JSON.stringify(response, null, 4);
  context.response.headers.set("Content-Type", "application/json");
});

//
const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());
app.listen({ port: 8000 });
