import { createAsyncThunk } from "@reduxjs/toolkit";
import { logout, login, register, token} from '../services/kapusta-api.js';

export const signUpUserThunk = createAsyncThunk(
  "users/signUpUser",
  async (user, { rejectWithValue, dispatch }) => {
    try {
      const data = await register(user);
      //token.set(data.accessToken);
      console.log("user: ",data);
      return data;    
    } catch {
        console.log("!!!!");
      return rejectWithValue();
    }
  }
);

export const loginUserThunk = createAsyncThunk(
    "users/loginUser",
    async (user, { rejectWithValue, dispatch }) => {
      try {
        const data = await login(user);
        //token.set(data.accessToken);
        console.log("user: ",data);
        return data;    
      } catch {
        return rejectWithValue();
      }
    }
  );

  export const logoutUserThunk = createAsyncThunk(
    "users/logoutUser",
    async (user, { rejectWithValue, dispatch }) => {
      try {
        await logout();
        token.unSet();
        console.log("logout ");
        //return data;    
      } catch {
        return rejectWithValue();
      }
    }
  );


                        