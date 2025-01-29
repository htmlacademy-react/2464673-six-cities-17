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

export type OfferCommonType = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: CityType;
  location: LocationType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: RatingType;
}
export type OfferType = {
  previewImage: string;
} & OfferCommonType


export type PointType = Pick<OfferType, 'id' | 'location'>;

export type CardType = 'favorites'|'cities';

export type CityName = string;

export type RatingType = number | null;



export type OfferTypeFull = {
  description: string;
  images: string[];
  goods: string[];
  host: UserType;
  bedrooms: number;
  maxAdults: number;
} & OfferCommonType


// export type CommentType = {
//   review: string;
//   rating: number;
// };

export type CommentRequest = {
  id: string;
  comment: Comment;
};

export type SortItemNamesType = {
  Popular: string;
  PriceLowHigh: string;
  PriceHighLow: string;
  TopRated: string;
  }

export type SortItemKey = keyof typeof SortItem;

export type SortItemName = typeof SortItem[SortItemKey];

export type AuthData = {
  email: string;
  password: string;
};

export type ReviewsType = {
  id: string;
  date: string;
  user: UserType;
  comment: string;
  rating: number;
}

export type UserType = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  token: string;
}

export type CommentPayloadType = {
  comment: string;
  rating: number;
}

export type CommentType = {
  id: string;
  date: string;
  user: UserType;
} & CommentPayloadType
