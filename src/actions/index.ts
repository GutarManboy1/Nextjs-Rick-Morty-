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
  return fetch("https://rickandmortyapi.com/api/location");
};
