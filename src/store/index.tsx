import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { createThemeSlice } from './themeSlice';
import { IStoreState } from './types';
import { useMemo } from 'react';

let store: EnhancedStore<IStoreState>;

const initialState: IStoreState = {
  theme: 'light'
};

function createInitStore(preloadedState = initialState) {
  const themeSlice = createThemeSlice(preloadedState.theme);

  return configureStore({
    reducer: {
      theme: themeSlice.reducer
    }
  });
}

export function initializeStore(preloadedState?: IStoreState) {
  let _store = store ?? createInitStore(preloadedState);

  if (preloadedState && store) {
    _store = createInitStore({
      ...store.getState(),
      ...preloadedState
    });

    store = undefined;
  }

  if (typeof window === 'undefined') {
    return _store;
  }

  if (!store) {
    store = _store;
  }

  return _store;
}

export function useStore(initialState?: IStoreState) {
  return useMemo(() => initializeStore(initialState), [initialState]);
}
