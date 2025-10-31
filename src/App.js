import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import { ChakraProvider, createSystem, defaultSystem, defaultConfig } from '@chakra-ui/react';
import { AlertProvider } from './context/alertContext';
import Alert from './components/Alert';

function App() {
  const sys = createSystem(defaultSystem, defaultConfig);

  return (
    <ChakraProvider value={sys}>
      <AlertProvider>
        <main>
          <Header />
          <Projects />
          <ContactPage />
          <Footer />
          <Alert />
          <Analytics />
          <SpeedInsights />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
