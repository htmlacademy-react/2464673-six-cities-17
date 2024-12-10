import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { OfferType } from '../../types';
import { getOfferGroupes } from '../../adaptors';
import FavoriteGroup from '../../components/ofavorite-group/favorite-group';

type Props = {
  offers: OfferType[];
}

export default function FavoritePage({ offers }: Props): JSX.Element {
  const offerGroups = getOfferGroupes(offers);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.keys(offerGroups).map((grouKey) => {
                const group: OfferType[] = offerGroups[grouKey];
                return (
                  <FavoriteGroup
                    key={grouKey}
                    offers={group}
                    city={grouKey}
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
