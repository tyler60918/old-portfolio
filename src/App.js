import './App.css';
import ProjectCard from './ProjectCard';
import capImg from './assets/capstone_logo.png';
import githubLogo from './assets/github-mark.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tyler's Portfolio</h1>
        <a
          className="GitHub-link"
          href="https://github.com/tyler60918?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubLogo} alt="GitHub Logo" />
        </a>
      </header>
      <div>
        <ProjectCard 
          title="Capstone Project" 
          description="A web and desktop app for adding events from a file to a Google Calendar" 
          link="https://github.com/tyler60918/s25-syncineers" 
          image={capImg} 
        />
      </div>
      
    </div>
  );
}

export default App;
