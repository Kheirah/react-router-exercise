import { Link } from "react-router-dom";
import { movies } from "./data/movies";
import { actors } from "./data/actors";
import { useParams } from "react-router-dom";

export default function DetailedMovies() {
  const { movieId } = useParams();
  const movie = movies.find((movie) => movie.id == movieId);
  const actorsInMovie = actors.filter((actor) =>
    movie.cast.find((cast) => cast.id == actor.id)
  );
  return (
    <div>
      <h3>{movie.title}</h3>
      <img src={movie.image} alt={movie.title} />
      <ul>
        Cast:
        {actorsInMovie.map((actor) => (
          <li key={actor.id}>
            <Link to={`/actors/${actor.id}`}>
              <h4>{actor.name}</h4>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
