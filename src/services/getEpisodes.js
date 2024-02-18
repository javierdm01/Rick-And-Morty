

export const getEpisodes=async()=>{
    const res= await fetch(`https://rickandmortyapi.com/api/episode`)
    const data=await res.json()
    return data
}