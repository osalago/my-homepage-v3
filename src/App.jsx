import { useEffect } from 'react';
import { Contact, Header, Hero, Projects } from './components';
import { useThemeStore } from './store';
import './styles/globals.css';

function App() {
  const initializeTheme = useThemeStore((state) => state.initializeTheme);

  // Initialize theme on app load
  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
