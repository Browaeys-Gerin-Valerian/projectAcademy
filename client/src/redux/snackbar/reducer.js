import { createSlice } from "@reduxjs/toolkit";

export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState: {
    open: false,
    message: "",
    type: null
  },
  reducers: {
    setSnackbar: (state, { payload }) => {
      const { open, message, type } = payload;
      state.open = open;
      state.message = message;
      state.type = type
    },
  },
});

export const snackbar = (state) => state.snackbar;
