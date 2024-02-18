import { useState, useEffect } from "react"
import { getActors } from "../getActors"

export function useActors(){
    const [actors,setActors]=useState()
    useEffect(()=>{
        getActors().then((data) => setActors(data.results))
    },[])
    

    return {actors}
}