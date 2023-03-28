import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "WebsiteOne 2023",
  organization: "AgileVentures Charity",
};

export const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {},
});

export default applicationSlice.reducer;
