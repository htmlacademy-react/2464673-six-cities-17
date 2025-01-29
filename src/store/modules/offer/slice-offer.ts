import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FeatureModule } from '../../../const';
import { loadNearByOffer, loadOfferFull, loadReviews } from './actions-offer';
import { OfferSliceType } from './type';
import { fetchNearByOffers, fetchOfferComments, getOfferInfoByID } from './api-actions-offer';
import { CommentType, OfferType, OfferTypeFull } from '../../../types';


const initialState: OfferSliceType = {
  offerFull: null,
  offersNearBy: [],
  reviews: [],
  offerLoadingFull: true,
  isLoadingOfferComments: true,
  isLoadingOffersNearby: true,
};

export const offerFullSlice = createSlice({
  name: FeatureModule.OFFER,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getOfferInfoByID.pending, (state) => {
        state.offerLoadingFull = true;
      })
      .addCase(getOfferInfoByID.fulfilled, (state, { payload }: PayloadAction<OfferTypeFull>) => {
        state.offerFull = payload;
        state.offerLoadingFull = false;
      })
      .addCase(getOfferInfoByID.rejected, (state) => {
        state.offerLoadingFull = false;
      })
      .addCase(fetchNearByOffers.pending, (state) => {
        state.isLoadingOffersNearby = true;
      })
      .addCase(fetchNearByOffers.fulfilled, (state, { payload }: PayloadAction<OfferType[]>) => {
        state.offersNearBy = payload;
        state.isLoadingOffersNearby = false;
      })
      .addCase(fetchNearByOffers.rejected, (state) => {
        state.isLoadingOffersNearby = false;
      })
      .addCase(fetchOfferComments.pending, (state) => {
        state.isLoadingOfferComments = true;
      })
      .addCase(fetchOfferComments.fulfilled, (state, { payload }: PayloadAction<CommentType[]>) => {
        state.reviews = payload;
        state.isLoadingOfferComments = false;
      })
      .addCase(fetchOfferComments.rejected, (state) => {
        state.isLoadingOfferComments = false;
      });
  },
});

// .addCase(loadOfferFull, (state, action) => {
//   state.offerFull = action.payload;
//   state.offerLoadingFull = false;
// })
// .addCase(loadNearByOffer, (state, action) => {
//   state.offersNearBy = action.payload;
// })
// .addCase(loadReviews, (state, action) => {
//   state.reviews = action.payload;
// });
//   }
// });

