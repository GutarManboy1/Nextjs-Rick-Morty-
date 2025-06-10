"use server"

export async function getCharacters () { 
    const res = await fetch('https://rickandmortyapi.com/api/character')
   
    
    const characterData = await res.json()


//    console.log(characterData.results)

    return characterData.results
}

// this is a function expression
export const getLocations = async () => {
    return fetch('https://rickandmortyapi.com/api/location')

} 
    
