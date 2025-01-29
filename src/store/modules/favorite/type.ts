import { OfferType } from '../../../types';

export type FavoriteSliceType = {
  favoriteOffers: OfferType[];
  isLoadingFavorites: boolean;
};
