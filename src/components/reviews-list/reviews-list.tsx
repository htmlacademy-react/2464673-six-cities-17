import Rivie from '../review/review';
import { ReviewsType } from '../../types';

type Props = {
  reviewSlice: ReviewsType[];
}

export default function ReviewsList({reviewSlice}: Props): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviewSlice.map((review) => <Rivie key={review.id} review={review}/>)}
    </ul>
  );
}
