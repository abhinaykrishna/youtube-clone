import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    displayModal: false,
    openSidebar: false,
  },
  reducers: {
    toggleVoiceModalDisplay: state => {
      state.displayModal = !state.displayModal;
    },
    toggleSidebar: state => {
      state.openSidebar = !state.openSidebar;
    },
  },
});

export const { toggleVoiceModalDisplay, toggleSidebar } = appSlice.actions;

export default appSlice.reducer;
