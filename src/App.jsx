import { useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import Filters from './components/Filters.jsx';
import MovieCard from './components/MovieCard.jsx';
import MovieModal from './components/MovieModal.jsx';
import Stats from './components/Stats.jsx';
import { movies } from './data/movies.js';

export default function App() {
  const [query, setQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [sortBy, setSortBy] = useState('rating');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [watchlist, setWatchlist] = useState([]);

  const genres = useMemo(() => ['All', ...new Set(movies.map((movie) => movie.genre))], []);

  const filteredMovies = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return movies
      .filter((movie) => selectedGenre === 'All' || movie.genre === selectedGenre)
      .filter((movie) => {
        const searchableText = [
          movie.title,
          movie.genre,
          movie.director,
          movie.year,
          ...movie.tags
        ].join(' ').toLowerCase();
        return searchableText.includes(normalizedQuery);
      })
      .sort((a, b) => {
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'year') return b.year - a.year;
        return a.title.localeCompare(b.title);
      });
  }, [query, selectedGenre, sortBy]);

  const toggleWatchlist = (movieId) => {
    setWatchlist((current) => (
      current.includes(movieId)
        ? current.filter((id) => id !== movieId)
        : [...current, movieId]
    ));
  };

  const topRating = Math.max(...movies.map((movie) => movie.rating)).toFixed(1);

  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main className="container">
        <Stats total={movies.length} watchlistCount={watchlist.length} topRating={topRating} />
        <Filters
          genres={genres}
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        <section className="sectionHeader">
          <div>
            <p className="eyebrow">Browse Library</p>
            <h2>Recommended Movies</h2>
          </div>
          <span>{filteredMovies.length} result{filteredMovies.length !== 1 ? 's' : ''}</span>
        </section>

        {filteredMovies.length > 0 ? (
          <section className="movieGrid">
            {filteredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onSelect={setSelectedMovie}
                isSaved={watchlist.includes(movie.id)}
                onToggleWatchlist={toggleWatchlist}
              />
            ))}
          </section>
        ) : (
          <div className="emptyState">
            <h3>No movies found</h3>
            <p>Try another keyword or choose a different genre.</p>
          </div>
        )}
      </main>
      <footer>
        <p>Designed & Developed by Abdelrahman Mohamed</p>
      </footer>
      <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
    </>
  );
}
