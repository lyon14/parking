import { createAsyncThunk } from "@reduxjs/toolkit";

export const logout = createAsyncThunk(
    "user/logout",
    async (data, { rejectWithValue }) => {
      try {
        const timeout = () => {
          return new Promise((resolve) => setTimeout(resolve, 800));
        };
        await timeout();
        return true;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );