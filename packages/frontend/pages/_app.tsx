import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { MainNav } from "@/components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <MainNav className="mx-6" />
      <Component {...pageProps} />
    </ClerkProvider>
  );
}
