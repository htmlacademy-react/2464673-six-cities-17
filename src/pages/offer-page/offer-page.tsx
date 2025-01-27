import Header from '../../components/header/header';
import OfferCardList from '../../components/offer-card-list/offer-card-list';
import ReviewsList from '../../components/reviews-list/reviews-list';
import Map from '../../components/map/map';
import { useAppDispatch, useAppSelector } from '../../store/storeHooks';
import { getOffers, getOffersLoading } from '../../store/modules/cities/selectors-cities';
import { getNearPlaces, getOfferFull, getReviews } from '../../store/modules/offer/selectors-offer';
import { LoginStatus, NEAR_PLACES_TO_SHOW, RoutePath } from '../../const';
import { Navigate, useParams } from 'react-router-dom';
import { getAuthStatus } from '../../store/modules/auth/selectors-auth';
import { useEffect } from 'react';
import { fetchNearByOffers, fetchOfferComments, getOfferInfoByID } from '../../store/modules/offer/api-actions-offer';
import { getCurrentCity } from '../../store/modules/cities/selectors-cities';
import Spinner from '../../components/spinner/spinner';
import { getOfferCategory, mapComments } from '../../adaptors';

export default function OfferPage(): JSX.Element {
  const { id: offerId } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (offerId) {
      dispatch(getOfferInfoByID(offerId));
      dispatch(fetchNearByOffers(offerId));
      dispatch(fetchOfferComments(offerId));
    }
  }, [offerId, dispatch]);

  // эти данные загружаются
  const activeCityName = useAppSelector(getCurrentCity);
  const authStatus = useAppSelector(getAuthStatus);
  const isLoading = useAppSelector(getOffersLoading);
  const offersData = useAppSelector(getOffers);

  //а эти нет(((
  const offer = useAppSelector(getOfferFull);

  const nearPlaces = useAppSelector(getNearPlaces).slice(
    0,
    NEAR_PLACES_TO_SHOW
  );
  const reviews = useAppSelector(getReviews);
  const reviewsFiltered = mapComments(reviews);

  if (isLoading || authStatus === LoginStatus.Unknown) {
    return <Spinner />;
  }

  if (!offer) {
    return <Navigate to={RoutePath.NOT_FOUND} />;
  }
  const ratingStars = Math.round(offer.rating === null ? 0 : offer.rating / 5 * 100);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery">
            {
              offer.images.map((image) => (
                <div className="offer__image-wrapper" key={image}>
                  <img className="offer__image" src={image} alt="Photo studio" />
                </div>
              ))
            }
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {
                offer.isPremium && (
                  <div className="offer__mark">
                    <span>Premium</span>
                  </div>
                )
              }
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offer.title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${ratingStars}%` }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer?.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {getOfferCategory(offer.type)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">{offer?.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {
                    offer.goods.map((item) => (
                      <li className="offer__inside-item" key={item}>
                        {item}
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={offer.host.avatarUrl} width={74} height={74} alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {offer.host.name}
                  </span>
                  {
                    offer.host.isPro && (
                      <span className="offer__user-status">
                        Pro
                      </span>
                    )
                  }
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {offer.description}
                  </p>
                  <div>
                  </div>

                  {
                    reviews && <ReviewsList reviewsFiltered={reviewsFiltered} reviewsLength={reviews.length} />
                  }

                </div>
              </div>
              <section className="offer__map map">
                <Map offersData={offersData} activeCityName={activeCityName} offerId={offerId} />
              </section>

              <div className="container">
                <section className="near-places places">
                  <h2 className="near-places__title">Other places in the neighbourhood</h2>
                  <OfferCardList sortedOfferCards={nearPlaces} />
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
