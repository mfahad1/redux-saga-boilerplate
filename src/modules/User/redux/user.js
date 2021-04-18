import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUserService, getUsersService } from '../../../services/api-services/users';

const GET_USERS = 'user/GET_USERS';
const CREATE_USER = 'user/CREATE_USER';

export const getUsers = createAsyncThunk(GET_USERS, async () => getUsersService());
export const createUser = createAsyncThunk(CREATE_USER, async (user) => createUserService(user));

const authSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    loading: false,
    error: null,
    createUserSuccess: false,
  },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        state.error = null;
        state.users = action.payload;
        state.loading = false;
        state.createUserSuccess = false;
      })
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.users = [];
        state.createUserSuccess = false;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
        state.users = [];
        state.createUserSuccess = false;
      })
      .addCase(createUser.fulfilled, (state) => {
        state.createUserSuccess = true;
      })
      .addCase(createUser.pending, (state) => {
        state.createUserSuccess = false;
      })
      .addCase(createUser.rejected, (state) => {
        state.createUserSuccess = false;
      });
  },
});

export default authSlice.reducer;
