import OfferCard from '../offer-card/offer-card';
import { OfferType } from '../../types';

type Props = {
  filteredOffers: OfferType[];
  onHandleActiveOfferChange?: (id: string | null) => void;
};

export default function OfferCardList({ filteredOffers, onHandleActiveOfferChange}: Props) {

  return(
    <div className="cities__places-list places__list tabs__content">
      {filteredOffers.map((offer) => (<OfferCard onHandleActiveOfferChange={onHandleActiveOfferChange} key={offer.id} offer={offer} cardType='cities' />
      ))}
    </div>
  );
}
