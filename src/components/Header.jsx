import { Clapperboard, Code2, Search } from 'lucide-react';

export default function Header({ query, setQuery }) {
  return (
    <header className="hero">
      <nav className="navbar">
        <div className="brand">
          <span className="brandIcon"><Clapperboard size={26} /></span>
          <span>MovieScope</span>
        </div>
        <a className="githubLink" href="https://github.com/abdelrahmanmohamed8745-droid" target="_blank" rel="noreferrer">
          <Code2 size={18} /> GitHub
        </a>
      </nav>

      <div className="heroContent">
        <p className="eyebrow">React Movie Browsing Website</p>
        <h1>Discover movies with smart search, filters, and clean detail views.</h1>
        <p className="heroText">
          A responsive React project built to demonstrate component-based UI, state management,
          search, filtering, sorting, and interactive movie details.
        </p>
        <div className="searchBox">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search by movie title, genre, director, or tag..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
      </div>
    </header>
  );
}
