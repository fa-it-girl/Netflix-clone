import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: 'ui',
  initialState: {signInVisible: true},
  reducers: {
      toggle(state){
        state.signInVisible = !state.signInVisible
      }
  }
})

export const uiAction = uiSlice.actions;
export default uiSlice;
