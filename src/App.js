import './App.css';
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
