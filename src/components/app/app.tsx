import { RoutePath, LoginStatus, DEFAULT_CITY } from '../../const';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import MainPage from '../../pages/main-page/main-page';
import FavoritePage from '../../pages/favorites-page/favorite-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFound from '../../pages/no-found/not-found';
import ProtectRoute from '../../pages/protect-route/protect-route';
import { OfferType, ReviewsType } from '../../types';

type Props = {
  offers: OfferType[];
  reviews: ReviewsType[];
}

export default function App({ offers, reviews }: Props): JSX.Element {

  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  const handleActiveOfferChange = (id: string | null) => setActiveOfferId(id);

  const [activeCityName, setActiveCity] = useState<string>(DEFAULT_CITY);

  const handleCityClick = (city: string) => {
    setActiveCity(city);
  };
  const offersData: OfferType[] = offers.filter((offer) => offer.city.name === activeCityName);
  const offersCount: number = offersData.length;
  return (
    <Routes>
      <Route path={RoutePath.Main}
        element={
          <MainPage
            activeCityName={activeCityName}
            activeOfferId={activeOfferId}
            onHandleActiveOfferChange={handleActiveOfferChange}
            offersData={offersData}
            offersCount={offersCount}
            onHandleCityClick={handleCityClick}
          />
        }
      />
      <Route path={RoutePath.Login} element={<LoginPage />} />
      <Route
        path={RoutePath.Favorites}
        element={
          <ProtectRoute loginStatus={LoginStatus.Auth}>
            <FavoritePage offers={offers} />
          </ProtectRoute>
        }
      />
      <Route path={RoutePath.Offer}
        element={
          <OfferPage
            activeCityName={activeCityName}
            activeOfferId={activeOfferId}
            offersData={offersData}
            reviews={reviews}
          />
        }
      />
      <Route path={RoutePath.NOT_FAUND} element={<NotFound />} />
    </Routes>
  );
}
