import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <div className="App">
      <Header />
      <Projects />
      <ContactPage />
      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
