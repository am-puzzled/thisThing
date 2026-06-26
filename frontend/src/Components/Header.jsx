
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        NetLearn
      </div>

      <nav>
        <a href="/">Home</a>
        <a href="/topics">Topics</a>
        <a href="/about">About</a>
      </nav>
    </header>
  );
}

export default Header;