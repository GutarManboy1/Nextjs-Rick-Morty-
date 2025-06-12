"use client";

import { useEffect, useState } from "react";
import { getCharacters } from "@/actions/index";
import { Charactercard } from "@/components/charactercard";
import { Navbar } from "@/components/navbar";
import { Searchbar } from "@/components/searchbar";

const CharacterPage = () => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await getCharacters();
      setCharacters(data);
    };

    fetchCharacters();
  }, []);

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="p-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <Navbar />
        <Searchbar
          placeholder="Search for a Character"
          value={search}
          onChange={setSearch}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredCharacters.map((character) => (
          <Charactercard
            key={character.id}
            name={character.name}
            gender={character.gender}
            id={character.id}
            image={character.image}
            species={character.species}
            status={character.status}
          />
        ))}
      </div>
    </main>
  );
};

export default CharacterPage;
