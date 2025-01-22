import { SortItem } from './const';

export type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
}
export type CityType = {
  name: CityName;
  location: LocationType;

}

export type OfferType = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: CityType;
  location: LocationType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: RatingType;
  previewImage: string;
}

export type CardType = 'favorites'|'cities';

export type CityName = string;

export type RatingType = number | null;

export type UserType = {
    name: string;
    avatarUrl: string;
    isPro: boolean;
}

export type ReviewsType = {
  id: string;
  date: string;
  user: UserType;
  comment: string;
  rating: number;
}

export type SortItemNamesType = {
  Popular: string;
  PriceLowHigh: string;
  PriceHighLow: string;
  TopRated: string;
  }

export type SortItemKey = keyof typeof SortItem;

export type SortItemName = typeof SortItem[SortItemKey];

