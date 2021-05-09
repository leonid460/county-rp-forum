import React, { useEffect } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { Layout } from '@/modules/layout/Layout';
import { Provider } from 'react-redux';
import { useStore } from '@/store';
import { setTheme } from '@/store/themeSlice/actions';
import { withThemeAndGlobalStyles } from '@/modules/layout/withThemeAndGlobalStyles';
import { getThemeFromLocalStorage, setThemeInLocalStorage } from '@/utils/localStorageThemeUtils';

const MyApp = ({ Component, pageProps, ...appProps }: AppProps) => {
  const store = useStore();

  const unsubscribe = store.subscribe(() => {
    const storeState = store.getState();
    const currentTheme = storeState.theme;

    setThemeInLocalStorage(currentTheme);
  });

  const LayoutWithThemeAndGlobalStyles = withThemeAndGlobalStyles(Layout);

  useEffect(() => {
    if (process.browser && !store.getState().theme) {
      const themeFromLS = getThemeFromLocalStorage();

      store.dispatch(setTheme(themeFromLS || 'light'));
    }
  }, [process.browser]);

  useEffect(() => {
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <Head>
        <title>County-RP Forum</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <LayoutWithThemeAndGlobalStyles {...appProps}>
          <Component {...pageProps} />
        </LayoutWithThemeAndGlobalStyles>
      </Provider>
    </>
  );
};

export default MyApp;
