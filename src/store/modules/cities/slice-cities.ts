import { createSlice } from '@reduxjs/toolkit';
import { CitiesArray, FeatureModule } from '../../../const';
import { loadOffers, changeCity, changeSorting, setOffersLoadingStatus } from './action-cities';
import { SortItem } from '../../../const';
import { CitiesSliceType } from './type';


const initialState: CitiesSliceType = {
  currentCity: CitiesArray[0],
  offers: [],
  isLoadingOffers: true,
  currentSort: SortItem.Popular,
};

export const citiesSlice = createSlice({
  name: FeatureModule.CITIES,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadOffers, (state, action) => {
        state.offers = action.payload.offer;
      })
      .addCase(changeCity, (state, action) => {
        state.currentCity = action.payload;
      })
      .addCase(changeSorting, (state, action) => {
        state.currentSort = action.payload;
      })
      .addCase(setOffersLoadingStatus, (state, action) => {
        state.isLoadingOffers = action.payload;
      });
  }
});

