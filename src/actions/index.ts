"use server";

export async function getCharacters() {
  const res = await fetch("https://rickandmortyapi.com/api/character");

  const characterData = await res.json();

  //    console.log(characterData.results)

  return characterData.results;
}

export const getEpisodes = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/episode");
  const episodeData = await res.json();
  return episodeData.results;
};

// this is a function expression
export const getLocations = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/location");
  const locationData = await res.json();

  const enrichedLocations = await Promise.all(
    locationData.results.map(async (location) => {
      const residentUrls = location.residents.slice(0, 3); // get first 3 residents

      const residents = await Promise.all(
        residentUrls.map(async (url) => {
          try {
            const res = await fetch(url);
            const data = await res.json();
            return {
              id: data.id,
              name: data.name,
              image: data.image,
            };
          } catch (err) {
            console.error("Failed to fetch resident:", url, err);
            return null;
          }
        })
      );

      return {
        id: location.id,
        name: location.name,
        dimension: location.dimension,
        residents: residents.filter(Boolean), // remove nulls
      };
    })
  );

  return enrichedLocations;
};

export const getCharacterById = async (id: string) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  if (!res.ok) throw new Error("Failed to fetch character");
  return res.json();
};

// Fetch multiple episodes by array of IDs
export const getEpisodesByIds = async (ids: string[]) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/episode/${ids.join(",")}`
  );
  if (!res.ok) throw new Error("Failed to fetch episodes");
  const data = await res.json();
  return Array.isArray(data) ? data : [data];
};
export async function getEpisodesWithCharacters() {
  const res = await fetch("https://rickandmortyapi.com/api/episode");
  const data = await res.json();
  const episodes = data.results;

  // Get unique character IDs from all episodes
  const characterUrls = episodes.flatMap(ep => ep.characters);
  const characterIds = [...new Set(characterUrls.map(url => url.split("/").pop()))];

  // Fetch character details
  const charRes = await fetch(`https://rickandmortyapi.com/api/character/${characterIds.join(",")}`);
  const characters = await charRes.json();
  const charMap = new Map(characters.map((char: any) => [char.url, char]));

  // Replace character URLs in episodes with full character objects
  const episodesWithCharacters = episodes.map(ep => ({
    ...ep,
    characters: ep.characters.map(url => charMap.get(url))
  }));

  return episodesWithCharacters;
}