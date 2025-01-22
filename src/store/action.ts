import { createAction } from '@reduxjs/toolkit';

import { OfferType } from '../types';

export const changeCity = createAction<string>('app/changeCity');

export const loadOffers = createAction<{offer: OfferType[]}>('data/loadOffers');

export const changeSorting = createAction<string>('offers/changeSorting');

export const setOffersLoadingStatus = createAction<boolean>('offer/setLoadingStatus');
