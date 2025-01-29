import Review from '../review/review';
import { ReviewsType } from '../../types';
import { useAppSelector } from '../../store/storeHooks';
import { getAuthStatus } from '../../store/modules/auth/selectors-auth';
import { LoginStatus } from '../../const';
import AddCommentForm from '../add-comment-form/add-comment-form';

type Props = {
  reviewsFiltered: ReviewsType[];
  reviews: ReviewsType[];
  onAddComment: () => void;
}

export default function ReviewsList({ onAddComment, reviewsFiltered, reviews }: Props): JSX.Element {
  const authStatus = useAppSelector(getAuthStatus);
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviewsFiltered.map((review) => <Review key={review.id} review={review} />)}
      </ul>
      {
        authStatus === LoginStatus.Auth && <AddCommentForm onAddComment={onAddComment}/>
      }
    </section>
  );
}
