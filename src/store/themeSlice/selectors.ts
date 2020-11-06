import { TCurrentThemeName } from './types';
import { theme, darkTheme } from 'themes/theme';

export const selectCurrentThemeName = (state: { theme: TCurrentThemeName }) => state.theme;

export const selectCurrentTheme = (state: { theme: TCurrentThemeName }) => {
  const themeName = state.theme;

  switch (themeName) {
    case 'dark':
      return darkTheme;
    default:
      return theme;
  }
};
