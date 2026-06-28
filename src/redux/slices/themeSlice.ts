import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type ThemeMode = 'light' | 'dark';
type UserPreference = 'light' | 'dark' | 'system';

export interface ThemeState {
  mode: ThemeMode;
  userPreference: UserPreference;
  prefersDark: boolean;
}

const initialState: ThemeState = {
  mode: 'light',
  userPreference: 'system',
  prefersDark: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<UserPreference>) => {
      state.userPreference = action.payload;
      // Calculate mode based on preference
      if (action.payload === 'system') {
        state.mode = state.prefersDark ? 'dark' : 'light';
      } else {
        state.mode = action.payload;
      }
    },
    setSysPreference: (state, action: PayloadAction<boolean>) => {
      state.prefersDark = action.payload;
      // Recalculate mode if preference is 'system'
      if (state.userPreference === 'system') {
        state.mode = action.payload ? 'dark' : 'light';
      }
    },
  },
});

export const { toggleTheme, setSysPreference } = themeSlice.actions;
export default themeSlice.reducer;
