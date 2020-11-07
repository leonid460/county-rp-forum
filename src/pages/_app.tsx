import React from 'react';
import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { Layout } from 'modules/layout/Layout';
import { Provider, useSelector } from 'react-redux';
import { useStore } from 'store';
import { selectCurrentTheme } from 'store/themeSlice/selectors';
import { ITheme } from 'themes/types';

const fontUrl =
  // eslint-disable-next-line max-len
  'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap';

const GlobalStyles = ({ theme }: { theme: ITheme }) => (
  <Global
    styles={css`
      @import url(${fontUrl});

      html,
      body {
        padding: 0;
        margin: 0;
        font-family: Roboto, sans-serif;
        line-height: 1.6;
        font-size: 18px;
        background: ${theme.colors.background};
      }

      * {
        box-sizing: border-box;
      }

      a {
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }

      img {
        max-width: 100%;
        display: block;
      }

      @keyframes growOut {
        0% {
          transform: scaleY(0);
        }
        80% {
          transform: scaleY(1.1);
        }
        100% {
          transform: scaleY(1);
        }
      }
    `}
  />
);

const LayoutWithTheme = ({ Component, pageProps }: AppProps) => {
  const currentTheme = useSelector(selectCurrentTheme);

  return (
    <ThemeProvider theme={{ ...currentTheme }}>
      <GlobalStyles theme={currentTheme} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

const MyApp = ({ Component, pageProps, ...appProps }: AppProps) => {
  const { initialReduxState, ...restPageProps } = pageProps;
  const store = useStore({ ...initialReduxState, theme: 'light' });

  return (
    <>
      <Head>
        <title>County-RP Forum</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <LayoutWithTheme Component={Component} pageProps={restPageProps} {...appProps} />
      </Provider>
    </>
  );
};

export default MyApp;
