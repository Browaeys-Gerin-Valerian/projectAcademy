import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    open: false,
    type: "LOGIN",
  },
  reducers: {
    setModal: (state, { payload }) => {
      state.open = payload;
    },
    setModalType: (state, { payload }) => {
      state.type = payload;
    },
  },
});

export const isOpen = (state) => state.modal.open;
export const modaltype = (state) => state.modal.type;
