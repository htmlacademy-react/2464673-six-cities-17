import Review from '../review/review';
import { ReviewsType } from '../../types';

type Props = {
  reviewSlice: ReviewsType[];
}

export default function ReviewsList({reviewSlice}: Props): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviewSlice.map((review) => <Review key={review.id} review={review}/>)}
    </ul>
  );
}
