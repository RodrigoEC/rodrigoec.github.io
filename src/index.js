import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ThemesProvider from './context/theme.context';
import GlobalStyles from './styles/global'

ReactDOM.render(
  <React.StrictMode>
    <ThemesProvider>
      <GlobalStyles />
      <App />
    </ThemesProvider>

  </React.StrictMode>,
  document.getElementById('root')
);
