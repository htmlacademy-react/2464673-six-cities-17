import { RoutePath, LoginStatus, DEFAULT_CITY } from '../../const';
import { Routes, Route } from 'react-router-dom';
import { OfferType } from '../../types';
import MainPage from '../../pages/main-page/main-page';
import FavoritePage from '../../pages/favorites-page/favorite-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFound from '../../pages/no-found/not-found';
import PrivatRoute from '../../pages/protect-route/protect-route';
import { useState } from 'react';


type Props = {
  offers: OfferType[];
}

export default function App({ offers }: Props): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string | undefined>(undefined);

  const handleActiveOfferChange = (id: string | undefined) => setActiveOfferId(id);

  const [activeCityName, setActiveCity] = useState<string>(DEFAULT_CITY);

  const handleCityClick = (city: string) => {
    setActiveCity(city);
  };
  const filteredOffers: OfferType[] = offers.filter((offer) => offer.city.name === activeCityName);
  const offersCount: number = filteredOffers.length;
  return (
    <Routes>
      <Route path={RoutePath.Main} element={<MainPage activeOfferId={activeOfferId} onHandleActiveOfferChange={handleActiveOfferChange} filteredOffers={filteredOffers} offersCount={offersCount} onHandleCityClick={handleCityClick} activeCityName={activeCityName} offers={offers} />} />
      <Route path={RoutePath.Login} element={<LoginPage />} />
      <Route
        path={RoutePath.Favorites}
        element={
          <PrivatRoute loginStatus={LoginStatus.Auth}>
            <FavoritePage offers={offers} />
          </PrivatRoute>
        }
      />
      <Route path={RoutePath.Offer} element={<OfferPage filteredOffers={filteredOffers} onHandleActiveOfferChange={handleActiveOfferChange} />} />
      <Route path={RoutePath.NOT_FAUND} element={<NotFound />} />
    </Routes>
  );
}
