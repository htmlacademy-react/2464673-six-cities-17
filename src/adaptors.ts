import { OFFER_CATEGORIES, REVIEW_MAX_COUNT } from './const';
import { CityName, OfferType, OfferTypeFull, ReviewsType } from './types';

type OfferGroups = Record<CityName, OfferType[]>;

export function getOfferGroups(offers: OfferType[]) {

  const result: OfferGroups = {};

  offers.forEach((offer) => {
    const name: CityName = offer.city.name;

    if (result[name]) {
      result[name].push(offer);
    } else {
      result[name] = [offer];
    }
  });
  return result;
}

export function mapComments(comments: ReviewsType[]): ReviewsType[] {
  return comments
    .toSorted((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, REVIEW_MAX_COUNT);
}

export function getOfferCategory(type: string): string {
  return OFFER_CATEGORIES[type];
}

export function isOfferFavorite<T extends OfferType | OfferTypeFull>(favoriteOffers: T[], offerId: string): boolean {
  return favoriteOffers.find((favorite) => favorite.id === offerId)?.isFavorite || false;
}

