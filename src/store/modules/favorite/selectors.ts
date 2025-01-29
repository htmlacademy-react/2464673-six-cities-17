import { FeatureModule } from '../../../const';
import { StateType } from '../../types';

export const selectFavoriteOffers = (state: StateType) => state[FeatureModule.FAVORITE].favoriteOffers;

export const selectIsLoadingFavorites = (state: StateType) => state[FeatureModule.FAVORITE].isLoadingFavorites;

