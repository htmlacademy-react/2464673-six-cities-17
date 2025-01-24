import { createAsyncThunk } from '@reduxjs/toolkit';
import { store } from '../..';
import { AxiosInstance } from 'axios';
import { loadOffers, setOffersLoadingStatus } from './action-cities';
import { OfferType } from '../../../types';
import { APIRoutes } from '../../../const';
import { StateType } from '../../types';

export const fetchOffers = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: typeof store.dispatch;
    state: StateType;
    extra: AxiosInstance;
  }
>('offers/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersLoadingStatus(true));
    const {data} = await api.get<OfferType[]>(APIRoutes.Offers);
    dispatch(setOffersLoadingStatus(false));
    dispatch(loadOffers({offer: data}));
  },
);
