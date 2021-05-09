import React from 'react';
import Head from 'next/head';
import { PageContentContainer } from '@/ui-kit/atoms/PageContentContainer';
import { PageContentHeader } from '@/ui-kit/atoms/PageContentHeader';
import { Test } from '@/modules/TestOfRules/Test';

const TestOfRulesPage = () => {
  const title = 'Тест на знание правил';

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <PageContentContainer>
        <PageContentHeader>{title}</PageContentHeader>
        <Test />
      </PageContentContainer>
    </>
  );
};

export default TestOfRulesPage;
