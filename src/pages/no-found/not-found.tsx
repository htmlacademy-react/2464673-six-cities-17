import { RoutePath } from '../../const';
import { Link } from 'react-router-dom';

export default function NotFound(): JSX.Element {
  return (
    <div style={{ display: 'block', margin: 'auto', width: 'max-content', textAlign: 'center' }}>
      <h1>404</h1>
      <p>Page not found</p>
      <Link to={RoutePath.Main}>На главную</Link>
    </div>
  );
}
