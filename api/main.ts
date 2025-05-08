<<<<<<< HEAD
=======
/// <reference lib="deno.ns" />
import { Hono } from "@hono/hono";
import { serveStatic } from "@hono/hono/deno";
import { secureHeaders } from "@hono/hono/secure-headers";

const app = new Hono();

app.use(secureHeaders());

app.use("/*", serveStatic({ root: "./dist" }));

/*
app.all('*', async (c) => {
  const res = await fetch('http://localhost:8239') // <==
  console.log(res.status)
  // ...
  const newResponse = new Response(res.body, res)
  // ...
  return newResponse
})
*/

app.get("/encrypt", serveStatic({ path: "./dist/index.html" }));
app.get("/wallframe", serveStatic({ path: "./dist/index.html" }));
app.get("/404", serveStatic({ path: "./dist/index.html" }));
app.get("/about", serveStatic({ path: "./dist/index.html" }));

app.get("/api", (c) => {
  const DNT = c.req.header("DNT");
  let response_txt = `Backend Api, no frontend should interfere.`;

  console.log(`${DNT == "1"} on Do Not Track`);

  if (DNT == "1") {
    console.log("Ignoring DNT request");
  }

  const name = c.req.query("name");

  if (name != undefined) {
    response_txt = response_txt + `\nOh hi, ${name}.`;
  }

  return c.text(response_txt);
});

app.get("/api/:name", (c) => {
  const name = c.req.param("name");
  return c.text(`${name}, thank u for telling me your name! >_<`);
});

app.post("/api", (c) => {
  return c.text("Post /api recieved");
});

app.use(
  serveStatic({
    onNotFound: (path, c) => {
      console.log(c.req.header());
      console.log(c.req.method);
      console.log(`${path} is not found, request to ${c.req.path}`);
    },
  }),
);

app.notFound((c) => {
  let error = false; // failcase
  const decoder = new TextDecoder("utf-8");
  const content = Deno.readFile("./dist/index.html")
    .then(
      (c) => {
        return decoder.decode(c);
      },
      () =>  {
        error = true;
        return '';
      }
    ); 
  if (error) {
    return c.html('failing', 500);
  }
  return c.html(content, 404);
});

Deno.serve(app.fetch);
>>>>>>> 2d3f878 (EOL)
