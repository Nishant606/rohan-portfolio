import { useContext } from 'react';

import './App.css';
import ContactPage from './components/ContactPage';
import Experience from './components/Experience';
import Landing from './components/Landing/Landing';
import Projects from './components/Projects';
import { ThemeContext } from './Context/DarkTheme';

import { GlobalStyles } from './global';

function App() {
  const { lightMode } = useContext(ThemeContext);

  return (
    <div className="App">
      <GlobalStyles lightMode={lightMode} />

      <Landing />
      <Experience />
      <Projects />
      <ContactPage />
    </div>
  );
}

export default App;
