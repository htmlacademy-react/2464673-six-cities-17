import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { BrowserRouter } from 'react-router-dom';
import { Offers } from './mocks/offers';
import { RiviesMocks } from './mocks/reviews-mocks';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App offers={Offers} reviews={RiviesMocks}/>
    </BrowserRouter>
  </React.StrictMode>

);
