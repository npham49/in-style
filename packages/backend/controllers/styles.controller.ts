import { FastifyRequest, FastifyReply } from "fastify";
import "@fastify/formbody";

import * as stylesService from "../services/styles.service";

type GetStyleRequest = FastifyRequest<{
  Body: { userId: string };
  Params: { userId: string };
}>;

type PostStyleRequest = FastifyRequest<{
  Body: { name: string; description: string; userId: string };
}>;

export async function getAllForUser(
  request: GetStyleRequest,
  reply: FastifyReply
) {
  // console.log(request.query);
  const styles = await stylesService.getAllForUser(request.params.userId);
  reply.status(200).send({ data: styles });
}

export async function postStyle(
  request: PostStyleRequest,
  reply: FastifyReply
) {
  const { name, description, userId } = request.body;
  const style = await stylesService.postStyle(name, description, userId);
  // console.log(request.body);
  reply.status(200).send({ data: style, status: "done" });
}
