import Card from '../../components/card/card';
import { OfferType } from '../../types';

type Props = {
  filteredOffers: OfferType[];
  onHandleActiveOfferChange: (id: string | undefined) => void;
};

export default function CardList({ filteredOffers, onHandleActiveOfferChange}: Props) {

  return(
    <div className="cities__places-list places__list tabs__content">
      {filteredOffers.map((offer) => (<Card onHandleActiveOfferChange={onHandleActiveOfferChange} key={offer.id} offer={offer} cardType='cities' />
      ))}
    </div>
  );
}
