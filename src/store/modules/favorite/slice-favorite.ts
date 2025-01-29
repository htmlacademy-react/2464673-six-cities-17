import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FeatureModule } from '../../../const';
import { loadFavoriteOfferCards, uploadFavoriteStatus } from './api-action-favorite';
import { OfferType } from '../../../types';
import { FavoriteSliceType } from './type';

const initialState: FavoriteSliceType = {
  favoriteOffers: [],
  isLoadingFavorites: false,
};

export const favoriteSlice = createSlice({
  name: FeatureModule.FAVORITE,
  initialState,
  reducers: {
    setFavoriteOffers(state, { payload }: PayloadAction<OfferType[]>) {
      state.favoriteOffers = payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(loadFavoriteOfferCards.pending, (state) => {
        state.isLoadingFavorites = true;
      })
      .addCase(loadFavoriteOfferCards.fulfilled, (state, { payload }: PayloadAction<OfferType[]>) => {
        state.favoriteOffers = payload;
        state.isLoadingFavorites = false;
      })
      .addCase(loadFavoriteOfferCards.rejected, (state) => {
        state.isLoadingFavorites = false;
      })
      .addCase(uploadFavoriteStatus.fulfilled, (state, { payload }: PayloadAction<OfferType>) => {
        if (payload.isFavorite) {
          state.favoriteOffers.push(payload);
        } else {
          const favoriteIndex = state.favoriteOffers.findIndex((offer) => offer.id === payload.id);
          state.favoriteOffers.splice(favoriteIndex, 1);
        }
      });
  },
});

export const { setFavoriteOffers } = favoriteSlice.actions;
