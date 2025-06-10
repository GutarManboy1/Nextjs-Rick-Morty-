import { getCharacters } from "@/actions/index";
import { Charactercard } from "@/components/charactercard";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CharacterPage = async () => {
  const characters = await getCharacters();
  console.log(characters[0].name);
  return (
    
    <div>
      {characters.map((character) => (
        <Charactercard key={character.id}
          name={character.name}
          gender={character.gender}
          id={character.id}
          image={character.image}
          species={character.species}
          status={character.status}
        />
      ))}
      {/* <Charactercard
        name={characters[0].name}
        gender={characters[0].gender}
        id={characters[0].id}
        image={characters[0].image}
        species={characters[0].species}
        status={characters[0].status}
      /> */}
    </div>
  );
};

export default CharacterPage;
