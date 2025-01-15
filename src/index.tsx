import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './components/app/app';
import { Offers } from './mocks/offers';
import { ReviewsMocks } from './mocks/reviews-mocks';
import { store } from './components/store';
import { loadOffers } from './components/store/action';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
store.dispatch(loadOffers(Offers));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App reviews={ReviewsMocks} />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>

);
