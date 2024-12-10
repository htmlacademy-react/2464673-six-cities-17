
export type locationType = {
  latitude: number;
  longitude: number;
  zoom: number;
}
export type CityType = {
  name: CityName;
  location: locationType;

}

export type OfferType = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: CityType;
  location: locationType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: RatingType;
  previewImage: string;
}

export type CardType = 'favorites'| 'cities';

export type CityName = string;

export type RatingType = number | null;

