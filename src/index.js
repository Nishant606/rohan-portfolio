import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { ThemeToggleProvider } from './Context/DarkTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeToggleProvider>
      <App />
    </ThemeToggleProvider>
  </React.StrictMode>
);
