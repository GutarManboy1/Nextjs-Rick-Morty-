import { getCharacters } from "@/actions/index";
import { Charactercard } from "@/components/charactercard";

const CharacterPage = async () => {
  const characters = await getCharacters();
  console.log(characters[0].name);

  return (
    <main className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {characters.map((character) => (
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
