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
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <a className="btn btn-primary">
          <SignInButton />
        </a>
      </SignedOut>
    </header>
  );
}

function User({ pageProps }: any) {
  return <Header />;
}

export default User;
