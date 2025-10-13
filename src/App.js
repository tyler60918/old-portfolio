import './App.css';
import ProjectCard from './ProjectCard';
import capImg from './assets/capstone_logo.png';
import githubLogo from './assets/github-mark.svg';
import wamImg from './assets/wam.png';
import terminalImg from './assets/terminal-logo.png';

function App() {
  return (
    <div className="App">
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
      <div className="Project-area">
        <ProjectCard 
          title="Easy-Sync" 
          description="A web and desktop app for adding events from a file to a Google Calendar" 
          link="https://github.com/tyler60918/s25-syncineers" 
          image={capImg} 
        />
        <ProjectCard
          title="Wack-A-Mole"
          description="A simple wack-a-mole program that automatically wacks the mole using multi-threading."
          link="https://github.com/tyler60918/cs452-hw4/tree/main/submission"
          image={wamImg}
        />
        <ProjectCard
          title="Shell Project"
          description="A simple shell program that supports redirection, and background processes."
          link="https://github.com/tyler60918/cs452-hw4/tree/main/submission"
          image={terminalImg}
        />
        <ProjectCard
          title="Thread-Safe Queue"
          description="A thread-safe queue implementation using mutexes and condition variables."
          link="https://github.com/tyler60918/Queue/tree/main"
          image=""
        />
      </div>
      
    </div>
  );
}

export default App;
