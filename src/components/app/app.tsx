import MainPage from '../../pages/main-page/main-page';
import { CardQuantity } from '../../const';


export default function App(): JSX.Element {
  return (
    <MainPage
      placesCount={CardQuantity.PlacesCount}
      allPlaces={CardQuantity.AllPlaces}
    />
  );
}

