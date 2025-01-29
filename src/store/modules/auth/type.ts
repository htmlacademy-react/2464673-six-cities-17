import { LoginStatus } from '../../../const';
import { UserType } from '../../../types';

export type AuthSliceType = {
  authorizationStatus: LoginStatus;
  user: UserType | null;
}
