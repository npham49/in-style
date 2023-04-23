import fastify, {
  FastifyInstance,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import "@fastify/formbody";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const server = fastify({ logger: true });

server.register(require("@fastify/formbody"));

// Or you can type your request using
type CustomRequest = FastifyRequest<{
  Body: { name: string; description: string; userId: string };
}>;

server.get("/ping", async (request, reply) => {
  return "pong\n";
});

server.post("/style", async (request: CustomRequest, reply: FastifyReply) => {
  const { name, description, userId } = request.body;
  const style = await prisma.style.create({
    data: {
      name,
      description,
      userId,
    },
  });
  console.log(request.body);
  reply.status(200).send({ addedItem: style, status: "done" });
});

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
