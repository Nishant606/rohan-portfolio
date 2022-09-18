import { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Experience from './components/Experience';
import Landing from './components/Landing/Landing';
import Projects from './components/Projects';
import { ThemeContext } from './Context/DarkTheme';

import { GlobalStyles } from './global';

function App() {
  const { lightMode, setLightMode } = useContext(ThemeContext);

  return (
    <div className="App">
      <GlobalStyles lightMode={lightMode} />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />}></Route>
          <Route exact path="/experience" element={<Experience />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
