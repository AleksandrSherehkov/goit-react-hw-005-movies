import { App } from 'components/App/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'services/styles/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <BrowserRouter basename="/goit-react-hw-005-movies">
    <App />
    <GlobalStyle />
  </BrowserRouter>
  //</React.StrictMode>
);
