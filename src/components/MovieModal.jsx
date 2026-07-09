import { X, Star, Calendar, Clock, UserRound } from 'lucide-react';

export default function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  return (
    <div className="modalOverlay" onClick={onClose} role="presentation">
      <div className="modal" onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true">
        <button className="closeBtn" onClick={onClose} aria-label="Close movie details">
          <X size={22} />
        </button>
        <div className="modalPoster">
          <img src={movie.poster} alt={`${movie.title} poster`} />
        </div>
        <div className="modalContent">
          <p className="eyebrow">Movie Details</p>
          <h2>{movie.title}</h2>
          <div className="metaGrid">
            <span><Star size={18} /> {movie.rating}/10</span>
            <span><Calendar size={18} /> {movie.year}</span>
            <span><Clock size={18} /> {movie.duration}</span>
            <span><UserRound size={18} /> {movie.director}</span>
          </div>
          <p>{movie.description}</p>
          <div className="tagList modalTags">
            {movie.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}
