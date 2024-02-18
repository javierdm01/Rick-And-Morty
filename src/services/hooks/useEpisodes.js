import { useState, useEffect } from "react"
import { getEpisodes } from "../getEpisodes"

export function useEpisodes(){
    const [episodes,setEpisodes]=useState()
    useEffect(()=>{
        getEpisodes().then((data) => setEpisodes(data.results))
    },[])
    

    return {episodes}
}