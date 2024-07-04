import { actors } from "./data/actors";
import { useParams } from "react-router-dom";

export default function DetailedActor() {
  const { actorId } = useParams();
  const actor = actors.find((actor) => actor.id == actorId);
  return (
    <div>
      <h3>{actor.name}</h3>
      <img src={actor.image} alt={actor.name} />
      <p>Popularity: {actor.popularity}</p>
      <p>Character played: {actor.character}</p>
    </div>
  );
}
