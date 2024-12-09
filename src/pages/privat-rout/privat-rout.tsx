import { Navigate } from 'react-router-dom';
import { LoginStatus, RoutePath } from '../../const';

type PrivatRoutProps = {
  children: JSX.Element;
  loginStatus: LoginStatus;
}

export default function PrivatRoute({children, loginStatus}: PrivatRoutProps): JSX.Element {
  return (
    loginStatus === LoginStatus.Auth ? children : <Navigate to={RoutePath.Login}/>
  );
}
