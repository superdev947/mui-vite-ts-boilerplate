import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface Notification {
  id: string;
  message: string;
  type: 'info' | 'error' | 'success' | 'warning';
}

export interface AppState {
  notifications: Notification[];
  modals: { [key: string]: boolean };
}

const initialState: AppState = {
  notifications: [],
  modals: {},
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<Notification>) => {
      state.notifications.push(action.payload);
    },
    removeNotification: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter(
        (n) => n.id !== action.payload,
      );
    },
    openModal: (state, action: PayloadAction<string>) => {
      state.modals[action.payload] = true;
    },
    closeModal: (state, action: PayloadAction<string>) => {
      state.modals[action.payload] = false;
    },
  },
});

export const { addNotification, removeNotification, openModal, closeModal } =
  appSlice.actions;
export default appSlice.reducer;
