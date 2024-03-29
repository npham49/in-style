import { Inter } from "next/font/google";
import { CardWithForm } from "@/components/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <CardWithForm />
      </div>
    </main>
  );
}
