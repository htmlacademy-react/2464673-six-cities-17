import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { CitiesArray } from '../../const';
import { loadOffers, changeCity, changeSorting } from './action';
import { OfferType, SortItemName } from '../../types';
import { SortItem } from '../../const';

type InitialStateType = {
  currentCity: string;
  offerCards: OfferType[];
  currentSort: SortItemName;
};

const initialState: InitialStateType = {
  currentCity: CitiesArray[0],
  offerCards: [],
  currentSort: SortItem.Popular,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, { payload }: PayloadAction<string>) => {
      state.currentCity = payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offerCards = action.payload;
    })
    .addCase(changeSorting, (state, action) =>{
      state.currentSort = action.payload;
    });
});
