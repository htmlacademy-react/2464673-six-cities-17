import { createAsyncThunk } from '@reduxjs/toolkit';
import { OfferCommonType, OfferType, OfferTypeFull } from '../../../types';
import { StateType } from '../../types';
import { store } from '../..';
import { AxiosInstance } from 'axios';
import { APIRoutes } from '../../../const';


type ThunkArg = {
  dispatch: typeof store.dispatch;
  state: StateType;
  extra: AxiosInstance;
}

export const loadFavoriteOfferCards = createAsyncThunk<
  OfferType[],
  undefined,
  ThunkArg
>('data/loadFavoriteOfferCards',
  async (_arg, {extra: api}) => {
    const { data } = await api.get<OfferType[]>(APIRoutes.Favorites);
    return data;
  }
);

export const uploadFavoriteStatus = createAsyncThunk<
  OfferType,
  { offerId: string; status: number },
  ThunkArg
>('data/uploadFavoriteStatus',
  async ({ offerId, status }, { getState, extra: api }) => {
    const { data } = await api.post<OfferTypeFull>(`${APIRoutes.Favorites}/${offerId}/${status}`);
    const {offers} = getState().cities;
    const currentOffer = offers.find((offer) => offer.id === data.id);

    if (!currentOffer) {
      throw new Error(`No such offer with given id: ${data.id}`);
    }
    const result: OfferType = {
      ...currentOffer,
      isFavorite: data.isFavorite,
    };

    return result;
  }
);
