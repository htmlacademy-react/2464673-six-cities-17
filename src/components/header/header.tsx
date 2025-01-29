import { Link, useNavigate } from 'react-router-dom';

import { LoginStatus, RoutePath } from '../../const';
import { logoutAction } from '../../store/modules/auth/api-action-auth';
import { useAppDispatch, useAppSelector } from '../../store/storeHooks';
import { getAuthStatus, getUserData } from '../../store/modules/auth/selectors-auth';
import { selectFavoriteOffers } from '../../store/modules/favorite/selectors';
import { setFavoriteOffers } from '../../store/modules/favorite/slice-favorite';


export default function Header(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authStatus = useAppSelector(getAuthStatus);
  const isAuth = authStatus === LoginStatus.Auth;
  const userData = useAppSelector(getUserData);
  const favoriteOffers = useAppSelector(selectFavoriteOffers);

  const handleSignOut = () => {
    if (isAuth) {
      dispatch(logoutAction());
      dispatch(setFavoriteOffers([]));
    } else {
      navigate(RoutePath.Login);
    }
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={RoutePath.Main}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {
                userData && (
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={RoutePath.Favorites}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                        <img src={userData.avatarUrl} alt='' />
                      </div>
                      <span className="header__user-name user__name">{userData.name}</span>
                      <span className="header__favorite-count" >{favoriteOffers.length}</span>
                    </Link>
                  </li>
                )
              }
              <li className="header__nav-item">
                <button className="header__nav-link sign-out" onClick={handleSignOut}>
                  <span className="header__signout">{isAuth ? 'Sign out' : 'Sign in'}</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header >
  );
}
