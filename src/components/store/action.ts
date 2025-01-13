import { createAction } from '@reduxjs/toolkit';

import { OfferType } from '../../types';

export const changeCity = createAction<string>('app/changeCity');

export const loadOffers = createAction<OfferType[]>('data/loadOffers');
