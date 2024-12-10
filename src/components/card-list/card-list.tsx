import Card from '../../components/card/card';
import { OfferType } from '../../types';

type Props = {
  offers: OfferType[];
};

export default function CardList({offers}: Props) {
  return(
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (<Card key={offer.id} offer={offer} cardType="cities" />
      ))}
    </div>
  );
}
