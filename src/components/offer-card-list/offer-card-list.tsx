import OfferCard from '../offer-card/offer-card';
import { OfferType } from '../../types';

type Props = {
  offersData: OfferType[];
  onHandleActiveOfferChange?: (id: string | null) => void;
};

export default function OfferCardList({ offersData, onHandleActiveOfferChange}: Props) {

  return(
    <div className="cities__places-list places__list tabs__content">
      {offersData.map((offer) => (<OfferCard onHandleActiveOfferChange={onHandleActiveOfferChange} key={offer.id} offer={offer} cardType='cities' />
      ))}
    </div>
  );
}
