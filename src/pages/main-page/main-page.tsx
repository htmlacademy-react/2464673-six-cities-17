import { useState } from 'react';
import CardList from '../../components/card-list/card-list';
import Header from '../../components/header/header';
import { OfferType } from '../../types';
import Map from '../../components/map/map';
import City from '../../components/city/city';


type Props = {
  offers: OfferType[];
  allPlaces: number;
  activeCity: string;
  onHandleCityClick: (city: string) => void;

}

export default function MainPage({ allPlaces, offers, activeCity, onHandleCityClick }: Props): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string | undefined>(undefined);

  const handleActiveCardChange = (id: string | undefined) => setActiveOfferId(id);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <City onHandleCityClick={onHandleCityClick} activeCityName={activeCity}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{allPlaces} places to stay in Amsterdam</b>
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
              <CardList activeCityName={activeCity} onHandleActiveOfferChange={handleActiveCardChange} offers={offers} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offers={offers} activeCity={activeCity} activeOfferId={activeOfferId} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

