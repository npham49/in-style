import { FastifyRequest, FastifyReply } from "fastify";
import "@fastify/formbody";

import * as stylesService from "../services/styles.service";
import { type } from "os";

type GetStyleRequest = FastifyRequest<{
  Body: { userId: string };
  Params: { userId: string };
}>;

type PostStyleRequest = FastifyRequest<{
  Body: { name: string; description: string; userId: string };
}>;

type PutStyleRequest = FastifyRequest<{
  Body: { name: string; description: string };
  Params: { id: string };
}>;

type DeleteStyleRequest = FastifyRequest<{
  Body: { userId: string };
  Params: { styleId: string };
}>;

// Get all styles for a user
export async function getAllForUser(
  request: GetStyleRequest,
  reply: FastifyReply
) {
  // console.log(request.query);
  const styles = await stylesService.getAllForUser(request.params.userId);
  reply.status(200).send({ data: styles });
}

// This function creates a new style and returns it to the client.
export async function postStyle(
  request: PostStyleRequest,
  reply: FastifyReply
) {
  const { name, description, userId } = request.body;
  const style = await stylesService.postStyle(name, description, userId);
  // console.log(request.body);
  reply.status(200).send({ data: style, status: "done" });
}

export async function putStyle(request: PutStyleRequest, reply: FastifyReply) {
  const { id } = request.params;
  const { name, description } = request.body;
  const style = await stylesService.putStyle(Number(id), name, description);
  reply.status(200).send({ data: style, status: "done" });
}

export async function deleteStyle(
  request: PutStyleRequest,
  reply: FastifyReply
) {
  const { id } = request.params;
  const style = await stylesService.deleteStyle(Number(id));
  reply.status(200).send({ data: style, status: "done" });
}
