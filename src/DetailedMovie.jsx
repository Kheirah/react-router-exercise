import { Link } from "react-router-dom";
import { movies } from "./data/movies";
import { useParams } from "react-router-dom";

export default function DetailedMovies() {
  const { movieId } = useParams();
  const movie = movies.find((movie) => movie.id == movieId);
  return (
    <div>
      <h3>{movie.title}</h3>
      <img src={movie.image} alt={movie.title} />
      <ul>
        Cast:
        {movie.cast.map((actor) => (
          <li key={actor.id}>
            <Link to={`/actors/${actor.id}`}>
              <h4>{actor.character}</h4>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
