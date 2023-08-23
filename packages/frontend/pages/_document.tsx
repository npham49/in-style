import { Html, Head, Main, NextScript } from "next/document";
import { MainNav } from "@/components/Navbar";

export default function Document() {
  return (
    <Html lang="en" data-theme="luxury">
      <Head />
      <body>
        <MainNav className="mx-6" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
