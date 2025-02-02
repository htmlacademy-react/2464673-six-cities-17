import { FeatureModule } from '../../../const';
import { StateType } from '../../types';

export const getOfferFull = (state: StateType) => state[FeatureModule.OFFER].offerFull;

export const getOfferLoadingFull = (state: StateType) => state[FeatureModule.OFFER].offerLoadingFull;

export const getNearPlaces = (state: StateType) => state[FeatureModule.OFFER].offersNearBy;

export const getReviews = (state: StateType) => state[FeatureModule.OFFER].reviews;

export const selectIsLoadingOfferComments = (state: StateType) => state[FeatureModule.OFFER].isLoadingOfferComments;

export const selectIsLoadingOffersNearby = (state: StateType) => state[FeatureModule.OFFER].isLoadingOffersNearby;
