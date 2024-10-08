package server

import (
	"github.com/gofiber/fiber/v2"

	"in-style/internal/database"
)

type FiberServer struct {
	*fiber.App

	db database.Service
}

func New() *FiberServer {
	server := &FiberServer{
		App: fiber.New(fiber.Config{
			ServerHeader:   "in-style",
			AppName:        "in-style",
			ReadBufferSize: 10000,
		}),

		db: database.New(),
	}

	return server
}
