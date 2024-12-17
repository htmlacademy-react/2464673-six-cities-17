import { CityName, OfferType } from './types';

type OfferGroups = Record<CityName, OfferType[]>;

export function getOfferGroupes(offers: OfferType[]): OfferGroups {
  // const result: OfferGroups = Object.groupBy(offers, ({city}) => city.name);
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
