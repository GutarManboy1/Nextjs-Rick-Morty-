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

