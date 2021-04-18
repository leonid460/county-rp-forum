import { TCurrentThemeName } from '@/store/themeSlice/types';

const LOCAL_STORAGE_THEME_KEY = 'county-rp-forum-theme';

export function getThemeFromLocalStorage(): TCurrentThemeName {
  if (!process.browser) {
    return 'light';
  }

  return localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as TCurrentThemeName;
}

export function setThemeInLocalStorage(theme: TCurrentThemeName) {
  localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
}
