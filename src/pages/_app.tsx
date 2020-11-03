import React from 'react';
import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { Layout } from 'modules/layout/Layout';
import { theme as defaultTheme } from 'ui-kit/themes/theme';

const fontUrl =
  'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap';

const GlobalStyles = () => (
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
      }

      * {
        box-sizing: border-box;
      }

      a {
        color: #0070f3;
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }

      img {
        max-width: 100%;
        display: block;
      }
    `}
  />
);

function MyApp({ Component, pageProps }: AppProps) {
  const currentTheme = pageProps.theme || defaultTheme;

  return (
    <ThemeProvider theme={{ ...currentTheme }}>
      <GlobalStyles />
      <Head>
        <title>County-RP Forum</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
