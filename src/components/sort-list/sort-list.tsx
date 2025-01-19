import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/storeHooks';

import { SortItem } from '../../const';
import { changeSorting } from '../../store/action';


export default function SortList(): JSX.Element {
  const sortSpanRef = useRef<HTMLElement>(null);
  const [isMenuOpened, setMenuOpened] = useState(false);
  const dispatch = useAppDispatch();
  const currentSort = useAppSelector((state) => state.currentSort);

  useEffect(() => {
    const hideSortList = (evt: MouseEvent) => {
      if (evt.target instanceof HTMLElement && sortSpanRef.current && !sortSpanRef.current.contains(evt.target)) {
        setMenuOpened(false);
      }
    };
    document.addEventListener('click', hideSortList);

    return () => {
      document.removeEventListener('click', hideSortList);
    };
  }, []);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        ref={sortSpanRef}
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setMenuOpened((lastOpened) => !lastOpened)}
      >
        {currentSort}
        <svg className='places__sorting-arrow' width={7} height={4}>
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom${isMenuOpened ? ' places__options--opened' : ''}`}>
        {Object.values(SortItem).map((sortOptionNames) => (
          <li
            key={sortOptionNames}
            className={`places__options${sortOptionNames === currentSort ? ' places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => dispatch(changeSorting(sortOptionNames))}
          >
            {sortOptionNames}
          </li>
        ))}
      </ul>
    </form>
  );
}
