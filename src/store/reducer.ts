import { authSlice } from './modules/auth/slice-auth';
import { citiesSlice } from './modules/cities/slice-cities';
import { offerFullSlice } from './modules/offer/slice-offer';
import { FeatureModule } from '../const';
import { combineReducers } from '@reduxjs/toolkit';
import { favoriteSlice } from './modules/favorite/slice-favorite';

export const reducer = combineReducers({
  [FeatureModule.AUTH]: authSlice.reducer,
  [FeatureModule.CITIES]: citiesSlice.reducer,
  [FeatureModule.OFFER]: offerFullSlice.reducer,
  [FeatureModule.FAVORITE]: favoriteSlice.reducer,
});
