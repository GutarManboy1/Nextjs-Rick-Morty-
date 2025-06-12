"use client"

import { useEffect, useState } from "react";
import { getEpisodesWithCharacters } from "@/actions/index";
import { Episodecard } from "@/components/episodecard";
import { Navbar } from "@/components/navbar";
import { Searchbar } from "@/components/searchbar";
import { cn } from "@/lib/utils";

export default function EpisodePage() {
  const [episodes, setEpisodes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchEpisodes = async () => {
      const data = await getEpisodesWithCharacters();
      setEpisodes(data);
    };

    fetchEpisodes();
  }, []);

  const filteredEpisodes = episodes.filter((episode) =>
    episode.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="p-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <Navbar />
        <Searchbar
          placeholder="Search for an Episode"
          value={search}
          onChange={setSearch}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredEpisodes.map(({ id, name, air_date, episode, characters }) => (
          <Episodecard
            key={id}
            id={id}
            name={name}
            air_date={air_date}
            episode={episode}
            characters={characters} // now with full character objects
          />
        ))}
      </div>
    </main>
  );
}
