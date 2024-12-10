import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { OfferType } from '../../types';
import Card from '../../components/card/card';

type Props = {
  offers: OfferType[];
}


export default function FavoritePage({ offers }: Props): JSX.Element {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {offers.map((offer) => (<Card key={offer.id} offer={offer} cardType="favorites" />
                  ))}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
