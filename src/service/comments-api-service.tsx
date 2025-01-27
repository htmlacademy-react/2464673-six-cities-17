
import { Comment } from '../types';

class CommentsApiService {
  #RATING_MIN = 1;
  #RATING_MAX = 5;
  #COMMENT_MIN_SYMBOLS = 50;

  isCommentValid({ rating, review }: Comment) {
    const isRatingValid = rating > this.#RATING_MIN && rating <= this.#RATING_MAX;
    const isCommentValid = review.length >= this.#COMMENT_MIN_SYMBOLS;

    return isRatingValid && isCommentValid;
  }
}

export default new CommentsApiService();
