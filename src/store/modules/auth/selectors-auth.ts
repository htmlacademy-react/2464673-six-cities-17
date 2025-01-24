import { FeatureModule } from '../../../const';
import { StateType } from '../../types';


export const getAuthStatus = (state: StateType) =>
  state[FeatureModule.AUTH].authorizationStatus;
