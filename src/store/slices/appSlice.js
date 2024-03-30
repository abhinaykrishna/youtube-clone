import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    displayModal: false,
  },
  reducers: {
    toggleVoiceModalDisplay: state => {
      state.displayModal = !state.displayModal;
    },
  },
});

export const { toggleVoiceModalDisplay } = appSlice.actions;

export default appSlice.reducer;
