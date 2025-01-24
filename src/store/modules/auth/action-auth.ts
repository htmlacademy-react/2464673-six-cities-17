import { createAction } from '@reduxjs/toolkit';
import { LoginStatus } from '../../../const';
import { UserType } from '../../../types';

export const changeAuthorizationStatus =
createAction<LoginStatus>('user/changeAuthorizationStatus');

export const setLoggedUserInfo =
createAction<UserType | null>('user/setLoggedUserInfo');

export const setIsAuthError = createAction<boolean>('user/setIsAuthError');
