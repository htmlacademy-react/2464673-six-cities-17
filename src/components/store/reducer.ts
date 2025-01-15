import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { CitiesArray } from '../../const';
import { loadOffers, changeCity } from './action';
import { OfferType } from '../../types';

type InitialStateType = {
  currentCity: string;
  offerCards: OfferType[];
};

const initialState: InitialStateType = {
  currentCity: CitiesArray[0],
  offerCards: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, { payload }: PayloadAction<string>) => {
      state.currentCity = payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offerCards = action.payload;
    });
});
