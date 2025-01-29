import { createAsyncThunk } from '@reduxjs/toolkit';
import { OfferTypeFull, OfferType, CommentPayloadType, CommentType } from '../../../types';
import { store } from '../..';
import { StateType } from '../../types';
import { AxiosInstance } from 'axios';
import { APIRoutes } from '../../../const';

export const getOfferInfoByID = createAsyncThunk<
  OfferTypeFull,
  { offerId: string },
  {
    dispatch: typeof store.dispatch;
    state: StateType;
    extra: AxiosInstance;
  }
>('offer/getOfferInfo',
  async ({offerId}, {extra: api }) => {
    const response = await api.get<OfferTypeFull>(`${APIRoutes.Offers}/${offerId}`);
    return response?.data;
  }
);

export const fetchNearByOffers = createAsyncThunk<
  OfferType[],
  { offerId: string },
  {
    dispatch: typeof store.dispatch;
    state: StateType;
    extra: AxiosInstance;
  }
>('offer/fetchNearByOffers',
  async ({offerId}, { extra: api }) => {
    const response = await api.get<OfferType[]>(`${APIRoutes.Offers}/${offerId}/nearby`);
    return response?.data;
  }
);

export const fetchOfferComments = createAsyncThunk<
  CommentType[],
  { offerId: string },
  {
    dispatch: typeof store.dispatch;
    state: StateType;
    extra: AxiosInstance;
  }
>('offer/fetchOfferComments',
  async ({offerId}, { extra: api }) => {
    const response = await api.get<CommentType[]>(`${APIRoutes.Comments}/${offerId}`);
    return response?.data;
  }
);

export const postOfferToComments = createAsyncThunk<
  CommentPayloadType,
  {id: string; payload: CommentPayloadType},
  {
    dispatch: typeof store.dispatch;
    state: StateType;
    extra: AxiosInstance;
  }
>('offer/postOfferToComments',
  async ({ id, payload }, { extra: api }) => {
    const response = await api.post<CommentPayloadType>(`${APIRoutes.Comments}/${id}`, payload);
    return response?.data;
  });
