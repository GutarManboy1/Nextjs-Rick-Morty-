"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getCharacters } from "@/actions/index";
import { Charactercard } from "@/components/charactercard";
import { Navbar } from "@/components/navbar";
import { Searchbar } from "@/components/searchbar";

const CharacterPage = () => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const searchParams = useSearchParams();
  const highlightId = searchParams.get("highlight");
  const [showOverlay, setShowOverlay] = useState(!!highlightId);

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await getCharacters();
      setCharacters(data);
    };

    fetchCharacters();
  }, []);

  useEffect(() => {
    if (highlightId) {
      setShowOverlay(true);
      const timer = setTimeout(() => {
        setShowOverlay(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [highlightId]);

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(search.toLowerCase())
  );

  // Find the highlighted character object
  const highlightedCharacter = characters.find(
    (char) => String(char.id) === highlightId
  );

  return (
    <main className="p-8 relative">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <Navbar />
        <Searchbar
          placeholder="Search for a Character"
          value={search}
          onChange={setSearch}
        />
      </div>

      {/* Grid of cards, blurred if overlay is active */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 transition-all duration-500 ${
          showOverlay ? "blur-sm pointer-events-none select-none" : ""
        }`}
      >
        {filteredCharacters.map((character) => (
          <Charactercard
            key={character.id}
            name={character.name}
            gender={character.gender}
            id={character.id}
            image={character.image}
            species={character.species}
            status={character.status}
            episodes={character.episode}
          />
        ))}
      </div>

      {/* Overlay with highlighted card */}
      {showOverlay && highlightedCharacter && (
        <div
  className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
  aria-modal="true"
  role="dialog"
>
  <div className="max-w-md w-full">
    <Charactercard
      name={highlightedCharacter.name}
      gender={highlightedCharacter.gender}
      id={highlightedCharacter.id}
      image={highlightedCharacter.image}
      species={highlightedCharacter.species}
      status={highlightedCharacter.status}
      episodes={highlightedCharacter.episode}
    />
  </div>
</div>

      )}
    </main>
  );
};

export default CharacterPage;
