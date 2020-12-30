import { Theme, css, Global } from '@emotion/react';
import React from 'react';

const fontUrl =
  // eslint-disable-next-line max-len
  'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap';

export const GlobalStyles = ({ theme }: { theme: Theme }) => (
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
