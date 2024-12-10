import { RoutePath, LoginStatus } from '../../const';
import { Routes, Route } from 'react-router-dom';
import { OfferType } from '../../types';
import MainPage from '../../pages/main-page/main-page';
import FavoritePage from '../../pages/favorites-page/favorite-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFound from '../../pages/no-found/not-found';
import PrivatRoute from '../../pages/protect-route/protect-route';

type Props = {
  offers: OfferType[];
  allPlaces: number;
}

export default function App({ allPlaces, offers }: Props): JSX.Element {
  return (
    <Routes>
      <Route path={RoutePath.Main} element={<MainPage allPlaces={allPlaces} offers={offers} />} />
      <Route path={RoutePath.Login} element={<LoginPage />} />
      <Route
        path={RoutePath.Favorites}
        element={
          <PrivatRoute loginStatus={LoginStatus.Auth}>
            <FavoritePage offers={offers}/>
          </PrivatRoute>
        }
      />
      <Route path={RoutePath.Offer} element={<OfferPage />} />
      <Route path={RoutePath.NOT_FAUND} element={<NotFound />} />
    </Routes>
  );
}
