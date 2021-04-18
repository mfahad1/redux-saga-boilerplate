import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import localStorageService from '../../../helpers/localStorageService';
import { loginService } from '../../../services/api-services/auth';

const LOGIN = 'auth/LOGIN';

export const loginAction = createAsyncThunk(LOGIN, async (loginPayload) =>
  loginService(loginPayload),
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    // here decode user and save it in context.
    login: localStorageService.get('token'),
    loading: false,
    error: null,
  },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.fulfilled, (state, action) => {
        state.error = null;
        state.login = action.payload;
        state.loading = false;
      })
      .addCase(loginAction.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.login = null;
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
        state.login = null;
      });
  },
});

export default authSlice.reducer;
