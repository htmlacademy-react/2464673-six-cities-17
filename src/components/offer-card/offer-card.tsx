import { Link } from 'react-router-dom';

import { CardType, OfferType } from '../../types';
import FavoriteButton from '../favorite-button/favorite-button';

type Props = {
  offer: OfferType;
  cardType: CardType;
  onHandleActiveOfferChange?: (id: string | undefined) => void;
}

export default function OfferCard({offer, cardType, onHandleActiveOfferChange}: Props): JSX.Element {
  const {rating, previewImage, price, isPremium, title, type, isFavorite} = offer;
  const placeRating = rating || 0;

  return (
    <article
      className={`${cardType}__card place-card`}
      onMouseEnter={() => onHandleActiveOfferChange && onHandleActiveOfferChange(offer.id)}
      onMouseLeave={() => onHandleActiveOfferChange && onHandleActiveOfferChange(undefined)}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${cardType}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={cardType === 'favorites' ? 150 : 260}
            height={cardType === 'favorites' ? 110 : 200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButton width='18' height='19' className="place-card" offerId={offer.id} isFavorite={isFavorite}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${placeRating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to="#">{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
