// app/characters/[id]/episodes/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";

type Episode = {
  id: number;
  name: string;
  episode: string;
  air_date: string;
};

export default async function CharacterEpisodesPage({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${params.id}`
  );
  if (!res.ok) return notFound();

  const character = await res.json();

  const episodeIds = character.episode.map((url: string) =>
    url.split("/").pop()
  );
  const episodeRes = await fetch(
    `https://rickandmortyapi.com/api/episode/${episodeIds.join(",")}`
  );
  if (!episodeRes.ok) return notFound();

  let episodes = await episodeRes.json();
  episodes = Array.isArray(episodes) ? episodes : [episodes];

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <Navbar />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        {/* Title + Image grouped */}
        <div className="flex items-center gap-4">
          <img
            src={character.image}
            alt={character.name}
            className="w-14 h-14 rounded-full object-cover border border-gray-300 shadow-md"
          />
          <h1 className="text-2xl font-bold">
            Episodes featuring {character.name}
          </h1>
        </div>

        {/* Back button */}
        <Button asChild>
          <Link href={`/characters`}>Back to Characters</Link>
        </Button>
      </div>

      {/* Episode List */}
      <ul className="space-y-2">
        {episodes.map((ep: Episode) => (
          <li
            key={ep.id}
            className="border p-4 rounded shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-2"
          >
            <div>
              <p className="font-semibold">{ep.name}</p>
              <p className="text-sm text-gray-600">
                {ep.episode} — {ep.air_date}
              </p>
            </div>

            <Button asChild>
              <Link href={`/episodes`}>View Episode</Link>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
