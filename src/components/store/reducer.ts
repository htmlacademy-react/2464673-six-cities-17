import { createReducer } from '@reduxjs/toolkit';
import { CitiesArray } from '../../const';
import { loadOffers, changeCity } from './action';
import { OfferType } from '../../types';


const initialState = {
  currentCity: CitiesArray[0],
  offerCards: [] as OfferType[],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, { payload }) => {
      state.currentCity = payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offerCards = action.payload;
    });
});
