import { useState, ChangeEvent } from 'react';

import { useAppDispatch } from '../../store/storeHooks';
import { useParams } from 'react-router-dom';
import { fetchOfferComments, postOfferToComments } from '../../store/modules/offer/api-actions-offer';
import commentsApiService from '../../service/comments-api-service';
import Rating from '../rating/rating';
import { RATING_MAX, RATING_MIN, REVIEW_LENGTH_MAX, REVIEW_LENGTH_MIN } from '../../const';

export default function AddCommentForm() {
  const {id: id} = useParams();
  const dispatch = useAppDispatch();
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formValues, setFormValues] = useState({
    rating: 0,
    review: '',
  });
  const isValidRating = formValues.rating >= RATING_MIN && formValues.rating <= RATING_MAX;
  const isValidReview = formValues.review.length >= REVIEW_LENGTH_MIN && formValues.review.length <= REVIEW_LENGTH_MAX;
  const isValid = isValidRating && isValidReview;

  const handleChangeRating = (value: number) => {
    setFormValues((prev) => ({
      ...prev,
      rating: value,
    }));
  };

  const handleChangeReview = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setSubmitError(null);
    setFormValues({
      ...formValues,
      review: evt.target.value,
    });
  };

  const handleSubmitForm = async () => {
    if (!commentsApiService.isCommentValid(formValues) || !id) {
      return;
    }

    const response = await dispatch(
      postOfferToComments({
        id,
        comment: formValues,
      })
    );

    if (response.meta.requestStatus === 'fulfilled') {
      dispatch(fetchOfferComments(id));

      setFormValues({
        rating: 0,
        review: '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmitForm} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <Rating
        value={formValues.rating}
        onStarClick={handleChangeRating}
        disabled={submitting}
      />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleChangeReview}
        value={formValues.review}
        disabled={submitting}
      />
      {
        submitError && <p className="error-message">{submitError}</p>
      }
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{REVIEW_LENGTH_MIN} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isValid || submitting}>Submit</button>
      </div>
    </form>
  );

}
