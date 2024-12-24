import { useState } from 'react';
import CardList from '../../components/card-list/card-list';
import Header from '../../components/header/header';
import { OfferType } from '../../types';
import Map from '../../components/map/map';
import City from '../../components/city/city';


type Props = {
  offers: OfferType[];
  activeCityName: string;
  onHandleCityClick: (city: string) => void;

}

export default function MainPage({ offers, activeCityName, onHandleCityClick }: Props): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string | undefined>(undefined);

  const handleActiveCardChange = (id: string | undefined) => setActiveOfferId(id);

  const filteredOffers: OfferType[] = offers.filter((offer) => offer.city.name === activeCityName);
  const offersCount: number = filteredOffers.length;
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <City onHandleCityClick={onHandleCityClick} activeCityName={activeCityName}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersCount} places to stay in {activeCityName}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <CardList filteredOffers={filteredOffers} onHandleActiveOfferChange={handleActiveCardChange} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offers={offers} activeCityName={activeCityName} activeOfferId={activeOfferId} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

