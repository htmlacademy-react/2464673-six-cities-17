import { useState, ChangeEvent, FormEvent } from 'react';

import { useAppDispatch } from '../../store/storeHooks';
import { useParams } from 'react-router-dom';
import { postOfferToComments } from '../../store/modules/offer/api-actions-offer';
import Rating from '../rating/rating';
import { ERROR_ADD_COMMENT_MESSAGE, RATING_MAX, RATING_MIN, REVIEW_LENGTH_MAX, REVIEW_LENGTH_MIN } from '../../const';
import { CommentPayloadType } from '../../types';
import { AxiosError } from 'axios';

type FormDataType = {
  rating: number;
  review: string;
}
const INITIAL_STATE: FormDataType = {
  rating: 0,
  review: '',
};

type Props = {
  onAddComment: () => void;
}

export default function AddCommentForm({onAddComment}: Props) {
  const {id: id} = useParams();
  const dispatch = useAppDispatch();

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formValues, setFormValues] = useState<FormDataType>(INITIAL_STATE);

  if (!id) {
    return null;
  }

  const isValidRating = formValues.rating >= RATING_MIN && formValues.rating <= RATING_MAX;
  const isValidReview = formValues.review.length >= REVIEW_LENGTH_MIN && formValues.review.length <= REVIEW_LENGTH_MAX;
  const isValid = isValidRating && isValidReview;

  const handleChangeRating = (value: number) => {
    setSubmitError(null);
    setFormValues((prev) => ({
      ...prev,
      rating: value,
    }));
  };

  const handleChangeReview = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setSubmitError(null);
    setFormValues((prev) => ({
      ...prev,
      review: e.target.value,
    }));
  };

  const onSubmit = async (payload: CommentPayloadType): Promise<void> => {
    const response = await dispatch(postOfferToComments({id, payload}));

    if (response.meta.requestStatus === 'rejected') {
      throw new Error(ERROR_ADD_COMMENT_MESSAGE);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitting(true);
    setSubmitError(null);

    onSubmit({
      comment: formValues.review,
      rating: formValues.rating,
    })
      .then(() => {
        setFormValues(INITIAL_STATE);
        onAddComment();
      })
      .catch((error: AxiosError) => {
        setSubmitError(error.message);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="reviews__form form"
      action="#"
      method="post"
    >
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
          <span className="reviews__star">rating</span>
          and describe your stay with at least
          <b className="reviews__text-amount">{REVIEW_LENGTH_MIN} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isValid || submitting}>Submit</button>
      </div>
    </form>
  );

}
