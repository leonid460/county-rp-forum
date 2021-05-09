import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { extractCritical } from '@emotion/server';
import { PORTAL_CONTAINER_ID } from '@/ui-kit/atoms/Portal';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const styles = extractCritical(initialProps.html);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            data-emotion-css={styles.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: styles.css }}
          />
        </>
      )
    };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <div id={PORTAL_CONTAINER_ID} />
        </body>
      </Html>
    );
  }
}
