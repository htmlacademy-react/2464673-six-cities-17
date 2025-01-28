import { LoginStatus, RoutePath } from '../../const';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import MainPage from '../../pages/main-page/main-page';
import FavoritePage from '../../pages/favorites-page/favorite-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFound from '../../pages/no-found/not-found';
import ProtectRoute from '../../pages/protect-route/protect-route';
import { OfferType } from '../../types';
import { useAppDispatch, useAppSelector } from '../../store/storeHooks';
import { fetchOffers } from '../../store/modules/cities/api-action-cities';
import Spinner from '../spinner/spinner';
import { checkAuthStatus } from '../../store/modules/auth/api-action-auth';
import { getOffers, getOffersLoading, getCurrentCity } from '../../store/modules/cities/selectors-cities';
import { getAuthStatus } from '../../store/modules/auth/selectors-auth';


export default function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthStatus);
  const isLoading = useAppSelector(getOffersLoading);
  const activeCityName = useAppSelector(getCurrentCity);
  const storeOffers = useAppSelector(getOffers);
  const [activeOfferId, setActiveOfferId] = useState<string | undefined>(undefined);

  const handleActiveOfferChange = (id: string | undefined) => setActiveOfferId(id);

  useEffect(() => {
    dispatch(fetchOffers());
    dispatch(checkAuthStatus());
  }, [dispatch]);

  if(isLoading || authStatus === LoginStatus.Unknown) {
    return <Spinner/>;
  }

  const offersData: OfferType[] = storeOffers.filter((offer) => offer.city.name === activeCityName);
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
          />
        }
      />
      <Route path={RoutePath.Login} element={<LoginPage />} />
      <Route
        path={RoutePath.Favorites}
        element={
          <ProtectRoute loginStatus={authStatus}>
            <FavoritePage />
          </ProtectRoute>
        }
      />
      <Route path={RoutePath.Offer}
        element={
          <OfferPage />
        }
      />
      <Route path={RoutePath.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
}
