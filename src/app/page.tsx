import Link from "next/link";


export default function Home() {
  return (
    <div className="grid grid-rows items-center justify-items-center min-h-screen  gap-10 sm:p-20">
      <h1 className="text-4xl">Welcome to The Rick and Morty API</h1>
      <Link href="/characters">Characters</Link>
      <Link href="/episodes">Episodes</Link>
      <Link href="/locations">Locations</Link>
    </div>
  );
}
