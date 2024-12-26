import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './components/app/app';
import { Offers } from './mocks/offers';
import { ReviewsMocks } from './mocks/reviews-mocks';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App offers={Offers} reviews={ReviewsMocks}/>
    </BrowserRouter>
  </React.StrictMode>

);
