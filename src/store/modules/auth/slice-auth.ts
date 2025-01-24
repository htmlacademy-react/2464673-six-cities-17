import { UserType } from '../../../types';
import { FeatureModule, LoginStatus } from '../../../const';
import { createSlice } from '@reduxjs/toolkit';
import { changeAuthorizationStatus, setLoggedUserInfo } from './action-auth';

type InitialStateType = {
  authorizationStatus: LoginStatus;
  user: UserType | null;
}

const initialState: InitialStateType = {
  authorizationStatus: LoginStatus.Unknown,
  user: null,
};

export const authSlice = createSlice({
  name: FeatureModule.AUTH,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(setLoggedUserInfo, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(changeAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    });
  },
});
