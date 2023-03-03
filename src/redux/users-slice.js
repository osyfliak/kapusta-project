import { createSlice } from "@reduxjs/toolkit";
import { signUpUserThunk, loginUserThunk, logoutUserThunk} from "./users-thunk";

const handleUserPending = (state) => {
  state.isLoading = true;
};
const handleUserRejected = (state, { payload }) => {
  state.error = payload;
};

const initialState = {
    token: null,
    isLoading: false,
    error: null,
    user: null,
};

const usersSlice = createSlice({
    name: "users",  
    initialState,   
    extraReducers: (builder) => {
        builder
          .addCase(signUpUserThunk.pending, handleUserPending)
          .addCase(loginUserThunk.pending, handleUserPending)         
          .addCase(logoutUserThunk.pending, handleUserPending)    
          .addCase(signUpUserThunk.rejected, handleUserRejected)   
          .addCase(loginUserThunk.rejected, handleUserRejected)      
          .addCase(logoutUserThunk.rejected, handleUserRejected)
          .addCase(signUpUserThunk.fulfilled, (state, { payload }) => {
            state.token = payload.token;
            state.isLoading = false;
            state.user= payload.user;
          })
          .addCase(logoutUserThunk.fulfilled, (state, { payload }) => {         
            state.token = null;
            state.isLoading = false;
            state.error = null;
            state.user = null;
          })
          .addCase(loginUserThunk.fulfilled, (state, { payload }) => {
            state.token = payload.token;
            state.isLoading = false;
            state.user = payload.user;           
          });
      },
});

export const usersReducer = usersSlice.reducer;
