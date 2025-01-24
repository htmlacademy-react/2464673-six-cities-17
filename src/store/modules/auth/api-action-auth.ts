import { createAsyncThunk } from '@reduxjs/toolkit';
import { store } from '../..';
import { StateType } from '../../types';
import { AuthData, UserType } from '../../../types';
import { AxiosInstance } from 'axios';
import { APIRoutes, LoginStatus } from '../../../const';
import { changeAuthorizationStatus, setLoggedUserInfo, setIsAuthError } from './action-auth';
import { dropToken, saveToken } from '../../../service/token';


export const checkAuthStatus = createAsyncThunk<
  void,
  undefined, {
    dispatch: typeof store.dispatch;
    state: StateType;
    extra: AxiosInstance;
  }
>('user/checkAuthStatus',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<UserType>(APIRoutes.Login);
      dispatch(setLoggedUserInfo(data));
      dispatch(changeAuthorizationStatus(LoginStatus.Auth));
    } catch {
      dispatch(changeAuthorizationStatus(LoginStatus.NotAuth));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: typeof store.dispatch;
  state: StateType;
  extra: AxiosInstance;
}
>('user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<UserType>(APIRoutes.Login, {email, password});
      saveToken(data.token);
      dispatch(setIsAuthError(false));
      dispatch(setLoggedUserInfo(data));
      dispatch(changeAuthorizationStatus(LoginStatus.Auth));
    } catch {
      dispatch(changeAuthorizationStatus(LoginStatus.NotAuth));
      dispatch(setIsAuthError(true));
    }
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: typeof store.dispatch;
  state: StateType;
  extra: AxiosInstance;
}
>('user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoutes.Logout);
    dropToken();
    dispatch(setLoggedUserInfo(null));
    dispatch(changeAuthorizationStatus(LoginStatus.NotAuth));
  }
);

