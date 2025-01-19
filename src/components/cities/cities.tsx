import { Link, useSearchParams } from 'react-router-dom';

import { CitiesArray } from '../../const';
import { useAppDispatch } from '../../store/storeHooks';
import { useEffect } from 'react';
import { changeCity } from '../../store/action';

type Props = {
  activeCityName: string;
};

export default function Cities({ activeCityName }: Props): JSX.Element {
  const [searchParam, setSearchParam] = useSearchParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeCity(searchParam.get('city') || CitiesArray[0]));
  }, [searchParam, dispatch]);

  const onHandleCityClick = (city: string) => {
    setSearchParam({ city });
  };
  return (
    <ul className="locations__list tabs__list">
      {CitiesArray.map((cityName) => (
        <li key={cityName} className="locations__item">
          <Link
            className={`locations__item-link tabs__item ${cityName === activeCityName ? 'tabs__item--active' : ''}`}
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
