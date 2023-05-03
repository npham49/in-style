import Image from "next/image";
import { Inter } from "next/font/google";
import UserButton from "@/components/UserButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      Hi! I&rsquo;m a Next.js app with Tailwind CSS and Clerk.
    </main>
  );
}
