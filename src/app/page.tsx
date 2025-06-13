import { Navbar } from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Image
        src="/portal.webp"
        alt="portal"
        fill
        className="object-cover filter blur z-0"
      />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-4xl m-0 backdrop-blur-md bg-white/30 p-6 rounded-2xl ripple shadow-lg">
          Welcome to the Rick and Morty API
        </h1>
        <div className="mt-10">
          <Navbar />
        </div>
      </div>
    </main>
  );
}
