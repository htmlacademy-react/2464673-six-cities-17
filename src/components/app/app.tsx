import { CardQuantity, RoutePath, LoginStatus } from '../../const';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import FavoritePage from '../../pages/favorites-page/favorite-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFound from '../../pages/no-found/not-found';
import PrivatRoute from '../../pages/privat-rout/privat-rout';

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutePath.Main} element={<MainPage allPlaces={CardQuantity.AllPlaces} placesCount={CardQuantity.PlacesCount}/>}/>
        <Route path={RoutePath.Login} element={<LoginPage/>}/>
        <Route
          path={RoutePath.Favorites}
          element={
            <PrivatRoute loginStatus={LoginStatus.NotAuth}>
              <FavoritePage />
            </PrivatRoute>
          }
        />
        <Route path={RoutePath.Offer} element={<OfferPage/>}/>
        <Route path={RoutePath.NOT_FAUND} element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>

  );
}
