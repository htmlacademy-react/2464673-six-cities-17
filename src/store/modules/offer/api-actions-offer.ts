import { createAsyncThunk } from '@reduxjs/toolkit';
import { OfferTypeFull, OfferType, ReviewsType, CommentRequest, CommentPayloadType } from '../../../types';
import { store } from '../..';
import { StateType } from '../../types';
import { AxiosInstance } from 'axios';
import { APIRoutes } from '../../../const';
import { loadNearByOffer, loadOfferFull, loadReviews } from './actions-offer';

export const getOfferInfoByID = createAsyncThunk<
  void,
  string,
  {
    dispatch: typeof store.dispatch;
    state: StateType;
    extra: AxiosInstance;
  }
>('offer/getOfferInfo',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<OfferTypeFull>(`${APIRoutes.Offers}/${id}`);
    dispatch(loadOfferFull(data));
  }
);

export const fetchNearByOffers = createAsyncThunk<
  void,
  string,
  {
    dispatch: typeof store.dispatch;
    state: StateType;
    extra: AxiosInstance;
  }
>('offer/fetchNearByOffers',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<OfferType[]>(`${APIRoutes.Offers}/${id}/nearby`);
    dispatch(loadNearByOffer(data));
  }
);

export const fetchOfferComments = createAsyncThunk<
  void,
  string,
  {
    dispatch: typeof store.dispatch;
    state: StateType;
    extra: AxiosInstance;
  }
>('offer/fetchOfferComments',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<ReviewsType[]>(`${APIRoutes.Comments}/${id}`);
    dispatch(loadReviews(data));
  }
);

export const postOfferToComments = createAsyncThunk<
  ReviewsType[],
  CommentRequest,
  {
    dispatch: typeof store.dispatch;
    state: StateType;
    extra: AxiosInstance;
  }
>('offer/postOfferToComments',
  async ({ id, comment }, { extra: api }) => {
    const { data } = await api.post<ReviewsType[]>(`${APIRoutes.Comments}/${id}`, { comment: comment.review, rating: +comment.rating });
    return data;
  });
