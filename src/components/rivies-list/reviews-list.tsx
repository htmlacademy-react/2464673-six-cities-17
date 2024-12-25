import Rivie from '../review/review';
import { RiviesType } from '../../types';

type Props = {
  reviews: RiviesType[];
}

export default function RiviesList({reviews}: Props): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => <Rivie key={review.id} rivie={review}/>)}
    </ul>
  );
}
