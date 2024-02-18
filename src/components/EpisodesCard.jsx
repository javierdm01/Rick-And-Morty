import { useEpisodes } from "../services/hooks/useEpisodes"

export function EpisodesCard(){
    const {episodes}= useEpisodes()
    return(
        <>
            <div className="episodes__list">
                {
                    episodes ? episodes.map((episode) =>(
                        <div className="episodes__cards" key={episode.id}>
                            <a><span>{episode.id}</span> {episode.name}</a>
                        </div>
                    )) : ''
                }
            </div>
        </>
    )
}