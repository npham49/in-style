import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

function Header() {
  return (
    <header style={{ display: "flex", justifyContent: "space-between" }}>
      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton />
      </SignedOut>
    </header>
  );
}

function MyApp({ pageProps }: any) {
  return <Header />;
}

export default MyApp;
