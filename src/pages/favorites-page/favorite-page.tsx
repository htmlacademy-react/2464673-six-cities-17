import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FavoriteGroup from '../../components/favorite-group/favorite-group';
import { OfferType } from '../../types';
import { getOfferGroups } from '../../adaptors';

type Props = {
  offers: OfferType[];
}

export default function FavoritePage({ offers }: Props): JSX.Element {
  const offerGroups = getOfferGroups(offers);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.keys(offerGroups).map((groupKey) => {
                const group: OfferType[] = offerGroups[groupKey];
                return (
                  <FavoriteGroup
                    key={groupKey}
                    offers={group}
                    city={groupKey}
                  />
                );
              })}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
