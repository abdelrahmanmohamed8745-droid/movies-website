export default function Stats({ total, watchlistCount, topRating }) {
  return (
    <section className="stats">
      <div>
        <strong>{total}</strong>
        <span>Movies</span>
      </div>
      <div>
        <strong>{watchlistCount}</strong>
        <span>Watchlist</span>
      </div>
      <div>
        <strong>{topRating}</strong>
        <span>Top Rating</span>
      </div>
    </section>
  );
}
