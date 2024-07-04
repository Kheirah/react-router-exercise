import { Link } from "react-router-dom";
import { actors } from "./data/actors";

export default function Actors() {
  return (
    <div>
      <h3>Actors</h3>
      <ul>
        {actors.map((actor) => (
          <li key={actor.id}>
            <Link to={`/actors/${actor.id}`}>
              <h2>{actor.name}</h2>
              <p>{actor.popularity}</p>
              <img src={actor.image} alt={actor.title} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
