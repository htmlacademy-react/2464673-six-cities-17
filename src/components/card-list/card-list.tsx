import Card from '../../components/card/card';
import { OfferType } from '../../types';

type Props = {
  offers: OfferType[];
  onHendleActiveOfferChange: (id: string | null) => void;
};

export default function CardList({offers, onHendleActiveOfferChange}: Props) {
  return(
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (<Card onHendleActiveOfferChange={onHendleActiveOfferChange} key={offer.id} offer={offer} cardType='cities' />
      ))}
    </div>
  );
}
