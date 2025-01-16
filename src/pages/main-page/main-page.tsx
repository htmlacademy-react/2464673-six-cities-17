import { useAppSelector } from '../../components/store/storeHooks';
import OfferCardList from '../../components/offer-card-list/offer-card-list';
import Header from '../../components/header/header';
import { OfferType } from '../../types';
import Map from '../../components/map/map';
import Cities from '../../components/cities/cities';
import SortList from '../../components/sort-list/sort-list';
import { sortOffers } from '../../helpers';

type Props = {
  activeCityName: string;
  offersCount: number;
  offersData: OfferType[];
  activeOfferId: string | null;
  onHandleActiveOfferChange: (id: string | null) => void;
}

export default function MainPage({ activeOfferId, offersData, offersCount, activeCityName, onHandleActiveOfferChange }: Props): JSX.Element {
  const currentSort = useAppSelector((state) => state.currentSort);
  const sortedOfferCards = sortOffers(offersData, currentSort);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={`page__main page__main--index${offersCount > 0 ? '' : ' page_main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <Cities activeCityName={activeCityName} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersCount} places to stay in {activeCityName}</b>
              <SortList />
              <OfferCardList sortedOfferCards={sortedOfferCards} onHandleActiveOfferChange={onHandleActiveOfferChange} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offersData={offersData} activeCityName={activeCityName} activeOfferId={activeOfferId} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

