import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { CitiesArray } from '../const';
import { loadOffers, changeCity, changeSorting, setOffersLoadingStatus } from './action';
import { OfferType, SortItemName } from '../types';
import { SortItem } from '../const';

type InitialStateType = {
  currentCity: string;
  offerCards:
  {
    offer: OfferType[];
    isLoading: boolean;
  };
  currentSort: SortItemName;
};

const initialState: InitialStateType = {
  currentCity: CitiesArray[0],
  offerCards: {
    offer: [],
    isLoading: false
  },
  currentSort: SortItem.Popular,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, { payload }: PayloadAction<string>) => {
      state.currentCity = payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offerCards.offer = action.payload.offer;
    })
    .addCase(changeSorting, (state, action) =>{
      state.currentSort = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.offerCards.isLoading = action.payload;
    });
});
