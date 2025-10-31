import './App.css';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="App">
      <Header />
      <Projects />
      <ContactPage />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
