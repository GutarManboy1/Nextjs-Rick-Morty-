
import { getEpisodes } from "@/actions/index";
import { Episodecard } from "@/components/episodecard";

export default async function EpisodePage() {
  const episodes = await getEpisodes();

  return (
    <main className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {episodes.map(({ id, name }) => (
          <Episodecard
            key={id}
            id={id}
            name={name}
            image={null} // No episode images from API
          />
        ))}
      </div>
    </main>
  );
}
