import React from 'react';
import Head from 'next/head';
import { PageContentContainer } from '@/ui-kit/atoms/PageContentContainer';
import { Content } from '@/modules/RulesOfForum/Content';

const RegistrationPage = () => {
  return (
    <>
      <Head>
        <title>Правила форума</title>
      </Head>
      <PageContentContainer>
        <Content />
      </PageContentContainer>
    </>
  );
};

export default RegistrationPage;
