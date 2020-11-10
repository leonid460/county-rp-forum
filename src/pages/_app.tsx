import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { Layout } from '@/modules/layout/Layout';
import { Provider } from 'react-redux';
import { useStore } from '@/store';
import { withThemeAndGlobalStyles } from '@/modules/layout/withThemeAndGlobalStyles';

const MyApp = ({ Component, pageProps, ...appProps }: AppProps) => {
  const { initialReduxState, ...restPageProps } = pageProps;
  const store = useStore({ ...initialReduxState, theme: 'light' });

  const LayoutWithThemeAndGlobalStyles = withThemeAndGlobalStyles(Layout);

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
