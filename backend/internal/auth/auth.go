package auth

import (
	"os"
	"strconv"

	env "in-style/internal/helper"

	"github.com/gorilla/sessions"
	"github.com/joho/godotenv"
	"github.com/markbates/goth"
	"github.com/markbates/goth/gothic"
	"github.com/markbates/goth/providers/google"
)

func NewAuth() {
	err := godotenv.Load()
	if err != nil {
		panic("Error loading .env file")
	}

	key := env.GetEnv("SESSION_KEY", "secret")
	IsProd := env.GetEnv("IS_PROD", "false") == "true"
	MaxAge, _ := strconv.Atoi(env.GetEnv("SESSION_MAX_AGE", "604800"))

	googleClientId := os.Getenv("GOOGLE_CLIENT_ID")
	googleClientSecret := os.Getenv("GOOGLE_CLIENT_SECRET")

	store := sessions.NewCookieStore([]byte(key))
	store.MaxAge(MaxAge)

	store.Options.Path = "/"
	store.Options.HttpOnly = true
	store.Options.Secure = IsProd

	gothic.Store = store

	goth.UseProviders(
		google.New(googleClientId, googleClientSecret, "http://localhost:"+env.GetEnv("PORT", "8080")+"/auth/callback/google"),
	)

}
