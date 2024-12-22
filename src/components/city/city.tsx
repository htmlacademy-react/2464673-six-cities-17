import { CitiesArry } from '../../const';
import { Link } from 'react-router-dom';

type Props = {
  activeCity: string;
  onHandleCityClick: (city: string) => void;
};

export default function City({ activeCity, onHandleCityClick }: Props): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {CitiesArry.map((cityName) => (
        <li key={cityName} className="locations__item">
          <Link
            className={`locations__item-link tabs__item ${cityName === activeCity ? 'tabs__item--active' : ''
            }`}
            to="#"
            onClick={(e) => {
              e.preventDefault();
              onHandleCityClick(cityName);
            }}
          >
            <span>{cityName}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
