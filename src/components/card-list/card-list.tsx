import Card from '../../components/card/card';
import { OfferType } from '../../types';

type Props = {
  activeCityName: string;
  offers: OfferType[];
  onHandleActiveOfferChange: (id: string | undefined) => void;
};

export default function CardList({offers, activeCityName, onHandleActiveOfferChange}: Props) {
  const filteredOffers: OfferType[] = offers.filter((offer) => offer.city.name === activeCityName);
  return(
    <div className="cities__places-list places__list tabs__content">
      {filteredOffers.map((offer) => (<Card onHandleActiveOfferChange={onHandleActiveOfferChange} key={offer.id} offer={offer} cardType='cities' />
      ))}
    </div>
  );
}
