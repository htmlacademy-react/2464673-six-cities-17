import { FeatureModule } from '../../../const';
import { StateType } from '../../types';

export const getOfferFull = (state: StateType) => state[FeatureModule.OFFER].offerFull;

export const getNearPlaces = (state: StateType) => state[FeatureModule.OFFER].offersNearBy;

export const getReviews = (state: StateType) => state[FeatureModule.OFFER].reviews;

