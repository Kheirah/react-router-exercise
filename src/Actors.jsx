import { Link } from "react-router-dom";
import { actors } from "./data/actors";

export default function Actors() {
  return (
    <div>
      <h3>Actors</h3>
      <ul>
        {actors
          .sort((a, b) => (a.name < b.name ? -1 : 1))
          .map((actor) => (
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
