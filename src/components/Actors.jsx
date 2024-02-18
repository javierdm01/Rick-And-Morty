import { useActors } from "../services/hooks/useActors"


export function Actors(){
    const {actors}= useActors()
    return (
        <>
        <h1>Actors</h1>
            <div className="actors">
                {
                    actors ? actors.map((actor) =>(
                        <div className="card__actors" key={actor.id}>
                            <img src={actor.image} alt="" />
                            <h3>{actor.name}</h3>
                            <h4>{actor.species}</h4>
                        </div>
                    )): ''
                }
            </div>
        </>
    )
}