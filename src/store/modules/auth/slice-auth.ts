import { FeatureModule, LoginStatus } from '../../../const';
import { createSlice } from '@reduxjs/toolkit';
import { changeAuthorizationStatus, setLoggedUserInfo } from './action-auth';
import { AuthSliceType } from './type';

const initialState: AuthSliceType = {
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
