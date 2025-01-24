import { createSlice } from '@reduxjs/toolkit';
import { CitiesArray, FeatureModule } from '../../../const';
import { loadOffers, changeCity, changeSorting, setOffersLoadingStatus } from './action-cities';
import { OfferType, SortItemName } from '../../../types';
import { SortItem } from '../../../const';

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
    isLoading: true
  },
  currentSort: SortItem.Popular,
};

export const citiesSlice = createSlice({
  name: FeatureModule.CITIES,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadOffers, (state, action) => {
        state.offerCards.offer = action.payload.offer;
      })
      .addCase(changeCity, (state, action) => {
        state.currentCity = action.payload;
      })
      .addCase(changeSorting, (state, action) => {
        state.currentSort = action.payload;
      })
      .addCase(setOffersLoadingStatus, (state, action) => {
        state.offerCards.isLoading = action.payload;
      });
  }
});

