import { createSlice } from '@reduxjs/toolkit';
import { OfferType, OfferTypeFull, ReviewsType } from '../../../types';
import { FeatureModule } from '../../../const';
import { loadNearByOffer, loadOfferFull, loadReviews } from './actions-offer';

type InitialStateType = {
  offerFull: OfferTypeFull | null;
  offersNearBy: OfferType[];
  reviews: ReviewsType[];
};

const initialState: InitialStateType = {
  offerFull: null,
  offersNearBy: [],
  reviews: [],
};

export const offerFullSlice = createSlice({
  name: FeatureModule.OFFER,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadOfferFull, (state, action) => {
        state.offerFull = action.payload;
      })
      .addCase(loadNearByOffer, (state, action) => {
        state.offersNearBy = action.payload;
      })
      .addCase(loadReviews, (state, action) => {
        state.reviews = action.payload;
      });
  }
});

