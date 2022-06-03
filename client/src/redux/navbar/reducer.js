import { createSlice } from "@reduxjs/toolkit";

export const navbarSlice = createSlice({
  name: "navbar",
  initialState: {
    expanded: false,
  },
  reducers: {
    setNavbarExpand: (state, { payload }) => {
      state.expanded = !state.expanded;
    },
    closeNavbar: (state, { payload }) => {
      state.expanded = false;
    },
  },
});

export const isNavExpanded = (state) => state.navbar.expanded;
