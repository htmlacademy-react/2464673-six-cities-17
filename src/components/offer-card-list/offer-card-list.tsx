import OfferCard from '../offer-card/offer-card';
// import Spinner from '../spinner/spinner';
import { OfferType } from '../../types';

type Props = {
  sortedOfferCards: OfferType[];
  onHandleActiveOfferChange?: (id: string | undefined) => void;
};

export default function OfferCardList({ sortedOfferCards, onHandleActiveOfferChange}: Props) {
  return(
    <div className="cities__places-list places__list tabs__content">
      {sortedOfferCards.map((offer) => (<OfferCard onHandleActiveOfferChange={onHandleActiveOfferChange} key={offer.id} offer={offer} cardType='cities' />
      ))}
      {/* {!isLoading ? (sortedOfferCards.map((offer) => (<OfferCard onHandleActiveOfferChange={onHandleActiveOfferChange} key={offer.id} offer={offer} cardType='cities' />
      ))) : ( <Spinner />) } */}
    </div>
  );
}
