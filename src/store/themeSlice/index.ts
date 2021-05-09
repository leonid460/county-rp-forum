import { createSlice } from '@reduxjs/toolkit';
import { TCurrentThemeName } from './types';

export const createThemeSlice = (preloadState: TCurrentThemeName | null) => {
  return createSlice({
    name: 'theme',
    initialState: preloadState,
    reducers: {
      toggle: (state) => {
        return state === 'light' ? 'dark' : 'light';
      },
      setTheme: (state, action) => {
        return action.payload;
      }
    }
  });
};
