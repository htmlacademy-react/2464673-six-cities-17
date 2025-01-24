import { FeatureModule } from '../../../const';
import { StateType } from '../../types';

export const getOffers = (state: StateType) =>
  state[FeatureModule.CITIES].offerCards.offer;

export const getOffersLoading = (state: StateType) =>
  state[FeatureModule.CITIES].offerCards.isLoading;


export const getCurrentCity = (state: StateType) =>
  state[FeatureModule.CITIES].currentCity;

export const getCurrentSort = (state: StateType) =>
  state[FeatureModule.CITIES].currentSort;
