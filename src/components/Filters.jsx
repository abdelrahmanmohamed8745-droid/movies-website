export default function Filters({ genres, selectedGenre, setSelectedGenre, sortBy, setSortBy }) {
  return (
    <section className="filters" aria-label="Movie filters">
      <div>
        <label htmlFor="genre">Genre</label>
        <select id="genre" value={selectedGenre} onChange={(event) => setSelectedGenre(event.target.value)}>
          {genres.map((genre) => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="sort">Sort by</label>
        <select id="sort" value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
          <option value="rating">Highest Rating</option>
          <option value="year">Newest</option>
          <option value="title">Title A-Z</option>
        </select>
      </div>
    </section>
  );
}
