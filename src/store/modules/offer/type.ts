import { OfferType, OfferTypeFull, ReviewsType } from '../../../types';

export type OfferSliceType = {
  offerFull: OfferTypeFull | null;
  offersNearBy: OfferType[];
  reviews: ReviewsType[];
  isLoadingOfferComments: boolean;
  offerLoadingFull: boolean;
  isLoadingOffersNearby: boolean;
};
