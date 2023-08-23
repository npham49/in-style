import { FastifyInstance } from "fastify";
import "@fastify/formbody";

import * as stylesController from "../controllers/styles.controller";

// stylesRoutes() is a function that configures the routes for the API endpoint /styles. It takes two
// arguments: fastify and options. fastify is a FastifyInstance object, which is used to configure
// routes. options is an object containing options for the routes.
async function stylesRoutes(fastify: FastifyInstance, options: any) {
  // The first route is a GET request to the path "/:userId". The getAllForUser() function is called
  // when the route is invoked.
  fastify.get("/:userId", stylesController.getAllForUser);
  // The second route is a POST request to the path "/". The postStyle() function is called when the
  // route is invoked.
  fastify.post("/", stylesController.postStyle);
  fastify.put("/:id", stylesController.putStyle);
  fastify.delete("/:id", stylesController.deleteStyle);
}

module.exports = stylesRoutes;
