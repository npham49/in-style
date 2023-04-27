import fastify from "fastify";
import "@fastify/formbody";

const server = fastify({ logger: true });

//API middlewares
server.register(require("@fastify/formbody"));

//API routes
server.register(require("./routes/styles.route"), { prefix: "styles" });

//starts a server on the provided port
server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
