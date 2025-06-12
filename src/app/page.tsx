import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl m-0">Welcome to the Rick and Morty API</h1>
      <div className="mt-10">
        <Navbar />
      </div>
    </div>
  );
}
