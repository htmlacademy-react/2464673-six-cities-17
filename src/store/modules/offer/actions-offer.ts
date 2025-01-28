import { createAction } from '@reduxjs/toolkit';
import { OfferType, OfferTypeFull, ReviewsType } from '../../../types';
// import { APIRoutes } from '../../../const';

export const loadReviews = createAction<ReviewsType[]>('offer/loadReviews');

export const loadOfferFull = createAction<OfferTypeFull>('offer/loadOfferFull');

export const loadNearByOffer = createAction<OfferType[]>('offer/loadNearByOffer');

// export const redirectToRout = createAction<APIRoutes>('offer/redirectToRout');
