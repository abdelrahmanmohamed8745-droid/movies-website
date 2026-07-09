import { Heart, Info, Star } from 'lucide-react';

export default function MovieCard({ movie, onSelect, isSaved, onToggleWatchlist }) {
  return (
    <article className="movieCard">
      <div className="posterWrap">
        <img src={movie.poster} alt={`${movie.title} poster`} loading="lazy" />
        <span className="rating"><Star size={15} fill="currentColor" /> {movie.rating}</span>
      </div>

      <div className="movieBody">
        <div className="movieHead">
          <div>
            <h3>{movie.title}</h3>
            <p>{movie.genre} • {movie.year} • {movie.duration}</p>
          </div>
          <button
            className={`iconBtn ${isSaved ? 'active' : ''}`}
            onClick={() => onToggleWatchlist(movie.id)}
            aria-label={isSaved ? 'Remove from watchlist' : 'Add to watchlist'}
          >
            <Heart size={18} fill={isSaved ? 'currentColor' : 'none'} />
          </button>
        </div>

        <p className="description">{movie.description}</p>
        <div className="tagList">
          {movie.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <button className="detailsBtn" onClick={() => onSelect(movie)}>
          <Info size={17} /> View Details
        </button>
      </div>
    </article>
  );
}
