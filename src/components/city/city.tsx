import { CitiesArry } from '../../const';
import { Link } from 'react-router-dom';

type Props = {
  activeCityName: string;
  onHandleCityClick: (city: string) => void;
};

export default function City({ activeCityName, onHandleCityClick }: Props): JSX.Element {

  return (
    <ul className="locations__list tabs__list">
      {CitiesArry.map((cityName) => (
        <li key={cityName} className="locations__item">
          <Link
            className={`locations__item-link tabs__item ${cityName === activeCityName ? 'tabs__item--active' : ''
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
