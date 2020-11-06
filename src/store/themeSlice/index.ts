import { createSlice } from '@reduxjs/toolkit';
import { TCurrentThemeName } from './types';

export const createThemeSlice = (preloadState: TCurrentThemeName) => {
  return createSlice({
    name: 'theme',
    initialState: preloadState || ('light' as TCurrentThemeName),
    reducers: {
      toggle: (state) => {
        return state === 'light' ? 'dark' : 'light';
      }
    }
  });
};
