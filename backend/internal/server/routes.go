package server

import (
	"in-style/internal/goth_fiber"
	"log"

	"github.com/gofiber/fiber/v2"
)

func (s *FiberServer) RegisterFiberRoutes() {
	s.App.Get("/", s.HelloWorldHandler)

	s.App.Get("/health", s.healthHandler)
	s.App.Get("/login/:provider", func(ctx *fiber.Ctx) error {
		if gothUser, err := goth_fiber.CompleteUserAuth(ctx); err == nil {
			return ctx.SendString(gothUser.Email)
		} else {
			return goth_fiber.BeginAuthHandler(ctx)
		}
	})
	s.App.Get("/auth/callback/:provider", func(ctx *fiber.Ctx) error {
		user, err := goth_fiber.CompleteUserAuth(ctx)
		if err != nil {
			log.Fatal(err)
		}

		return ctx.SendString(user.Email)
	})
	s.App.Get("/logout", func(ctx *fiber.Ctx) error {
		if err := goth_fiber.Logout(ctx); err != nil {
			log.Fatal(err)
		}

		return ctx.SendString("logout")
	})

}

func (s *FiberServer) HelloWorldHandler(c *fiber.Ctx) error {
	resp := fiber.Map{
		"message": "Hello World",
	}

	return c.JSON(resp)
}

func (s *FiberServer) healthHandler(c *fiber.Ctx) error {
	return c.JSON(s.db.Health())
}