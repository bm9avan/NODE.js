Bun.serve({
  fetch(req) {
    const url = new URL(req.url);
    console.log(url);
    if ((url.pathname = "/test")) {
      return new Response(JSON.stringify({ hi: "world" }), { status: 250 });
    } else {
      return new Response(Bun.file("./package.json"));
    }
  },

  // Optional port number - the default value is 3000
  port: process.env.PORT || 3000,
});
