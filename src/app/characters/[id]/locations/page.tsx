import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";

type Location = {
  id: number;
  name: string;
  type: string;
  dimension: string;
};

export default async function CharacterLocationsPage({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${params.id}`
  );
  if (!res.ok) return notFound();

  const character = await res.json();

  const locationUrls = [character.origin.url, character.location.url].filter(Boolean);

  const locationData = await Promise.all(
    locationUrls.map(async (url: string) => {
      const res = await fetch(url);
      if (!res.ok) return null;
      return await res.json();
    })
  );

  const locations = locationData.filter(Boolean);

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <Navbar />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        {/* Title + Image */}
        <div className="flex items-center gap-4">
          <img
            src={character.image}
            alt={character.name}
            className="w-14 h-14 rounded-full object-cover border border-gray-300 shadow-md"
          />
          <h1 className="text-2xl font-bold">
            Locations related to {character.name}
          </h1>
        </div>

        <Button asChild>
          <Link href={`/characters`}>Back to Characters</Link>
        </Button>
      </div>

      {/* Location List */}
     {/* Location List */}
<ul className="space-y-2">
  {locations.map((loc: Location) => (
    <li
      key={loc.id}
      className="border p-4 rounded shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-2"
    >
      <div>
        <p className="font-semibold">{loc.name}</p>
        <p className="text-sm text-gray-600">
          Type: {loc.type || "Unknown"} — Dimension: {loc.dimension || "Unknown"}
        </p>
      </div>
      <Button asChild className="self-start md:self-auto">
        <Link href={`/locations`}>View Location</Link>
      </Button>
    </li>
  ))}
</ul>

    </div>
  );
}
