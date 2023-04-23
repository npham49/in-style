import fastify from "fastify";
import "@fastify/formbody";

const server = fastify({ logger: true });

server.register(require("@fastify/formbody"));

server.register(require("./routes/styles.route"), { prefix: "styles" });

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
