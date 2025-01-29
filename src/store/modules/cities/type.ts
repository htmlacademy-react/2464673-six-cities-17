import { OfferType, SortItemName } from '../../../types';

export type CitiesSliceType = {
  currentCity: string;
  offers: OfferType[];
  isLoadingOffers: boolean;
  currentSort: SortItemName;
};
