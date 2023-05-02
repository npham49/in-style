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

// This function deletes a style and then return it, but it checks if the user is the user who created the style first
export async function deleteStyle(
  request: DeleteStyleRequest,
  reply: FastifyReply
) {
  const styleId = Number(request.params.styleId);
  // get the style that will need to be deleted to check the id
  const style = await stylesService.getStyle(styleId);
  // if the user id of the style is not the same as the user id of the request, return an error
  if (style!.userId !== request.body.userId) {
    reply.status(401).send({
      data: null,
      status: "error",
      message: "You are not authorized to delete this style",
    });
    return;
  }
  const userId = request.body.userId;
  const styleDel = await stylesService.deleteStyle(styleId);
  reply.status(200).send({ data: styleDel, status: "done" });
}
