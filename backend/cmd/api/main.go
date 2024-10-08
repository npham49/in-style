package main

import (
	"fmt"
	"in-style/internal/auth"
	env "in-style/internal/helper"
	"in-style/internal/server"
	"os"
	"strconv"

	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	_ "github.com/joho/godotenv/autoload"
)

func main() {

	auth.NewAuth()

	server := server.New()
	server.Use(logger.New(logger.Config{
		Format: "[${ip}]:${port} ${status} - ${method} ${path}\n",
	}))
	// Initialize default config
	server.Use(cors.New())

	// Or extend your config for customization
	server.Use(cors.New(cors.Config{
		AllowOrigins: env.GetEnv("ALLOWED_ORIGINS", "*"),
		AllowHeaders: "Origin, Content-Type, Accept",
	}))

	server.RegisterFiberRoutes()

	port, _ := strconv.Atoi(os.Getenv("PORT"))
	err := server.Listen(fmt.Sprintf(":%d", port))
	if err != nil {
		panic(fmt.Sprintf("cannot start server: %s", err))
	}
}
