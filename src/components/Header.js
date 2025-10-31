import githubLogo from '../assets/github-mark.svg';

function Header() {
  return (
    <header className="App-header">
      <h2>Tyler's Portfolio</h2>
      <a
        className="GitHub-link"
        href="https://github.com/tyler60918?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={githubLogo} alt="GitHub Logo" />
      </a>
    </header>
  );
}

export default Header;