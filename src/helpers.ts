import { SortItemName, OfferType } from './types';
import { SortItem } from './const';

const sortBy = {
  [SortItem.Popular]: (offerCards: OfferType[]) => [...offerCards],
  [SortItem.PriceHighLow]: (offerCards: OfferType[]) => [...offerCards].sort((leftCard, rightCard) => leftCard.price - rightCard.price),
  [SortItem.PriceLowHigh]: (offerCards: OfferType[]) => [...offerCards].sort((leftCard, rightCard) => rightCard.price - leftCard.price),
  [SortItem.TopRated]: (offerCards: OfferType[]) => [...offerCards].sort((leftCard, rightCard) =>
    (rightCard.rating === null ? 0 : rightCard.rating) - (leftCard.rating === null ? 0 : leftCard.rating)),
};

export const sortOffers = (offerCard: OfferType[], sortType: SortItemName) => sortBy[sortType](offerCard);
