import { getCharacterById, getEpisodesByIds } from "@/actions/index";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Searchbar } from "@/components/searchbar";
import { Button } from "@/components/ui/button"; // adjust path if needed

type Props = {
  params: {
    id: string;
  };
};

export default async function CharacterEpisodesPage({ params }: Props) {
  const character = await getCharacterById(params.id);
  if (!character) return notFound();

  const episodeIds = character.episode.map((url: string) => url.split("/").pop());

  const episodes = await getEpisodesByIds(episodeIds);

  return (
    <main className="p-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <Navbar />
        <Searchbar placeholder="Search for a Character" />
      </div>
      <h1 className="text-2xl font-bold mb-4">
        Episodes Featuring {character.name}
      </h1>
      <ul className="space-y-2">
        {episodes.map((ep: any) => (
          <li key={ep.id} className="p-4 border rounded flex flex-col gap-2">
            <h2 className="text-lg font-semibold">{ep.name}</h2>
            <p className="text-sm text-muted-foreground">
              Air Date: {ep.air_date} — Episode: {ep.episode}
            </p>
            <Button asChild>
              <Link href={`/episodes/${ep.id}`}>
                View Episode Details
              </Link>
            </Button>
          </li>
        ))}
      </ul>
    </main>
  );
}
