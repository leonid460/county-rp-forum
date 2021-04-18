import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { Layout } from '@/modules/layout/Layout';
import { Provider } from 'react-redux';
import { useStore } from '@/store';
import { withThemeAndGlobalStyles } from '@/modules/layout/withThemeAndGlobalStyles';
import { getThemeFromLocalStorage, setThemeInLocalStorage } from '@/utils/localStorageThemeUtils';

const MyApp = ({ Component, pageProps, ...appProps }: AppProps) => {
  const { initialReduxState, ...restPageProps } = pageProps;
  const themeNameFromProps: 'light' | 'dark' | undefined = (initialReduxState || {})?.theme;

  const [themeName, setThemeName] = useState<'light' | 'dark'>(themeNameFromProps || 'light');
  const store = useStore({ ...initialReduxState, theme: themeName });

  const unsubscribe = store.subscribe(() => {
    const storeState = store.getState();
    const currentTheme = storeState.theme;

    setThemeInLocalStorage(currentTheme);
  });

  const LayoutWithThemeAndGlobalStyles = withThemeAndGlobalStyles(Layout);

  useEffect(() => {
    if (process.browser && !themeNameFromProps) {
      setThemeName(getThemeFromLocalStorage());
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
          <Component {...restPageProps} />
        </LayoutWithThemeAndGlobalStyles>
      </Provider>
    </>
  );
};

export default MyApp;
