import { useEffect } from 'react';
import { useThemeStore } from './store';
import { Header, Hero, Projects, Contact } from './components';
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
