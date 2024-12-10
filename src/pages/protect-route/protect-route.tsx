import { Navigate } from 'react-router-dom';
import { LoginStatus, RoutePath } from '../../const';

type ProtectRouteProps = {
  children: JSX.Element;
  loginStatus: LoginStatus;
}

export default function ProtectRoute({children, loginStatus}: ProtectRouteProps): JSX.Element {
  return (
    loginStatus === LoginStatus.Auth ? children : <Navigate to={RoutePath.Login}/>
  );
}
