import { Link } from 'react-router-dom';

import { OfferType } from '../../types';
import OfferCard from '../offer-card/offer-card';

type Props = {
  offers: OfferType[];
  city: string;
}

export default function FavoriteGroup({ offers, city }: Props): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to="#">
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => (<OfferCard key={offer.id} offer={offer} cardType='favorites' />
        ))}
      </div>
    </li>
  );
}
