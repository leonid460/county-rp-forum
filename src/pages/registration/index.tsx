import React from 'react';
import Head from 'next/head';
import { PageContentContainer } from '@/ui-kit/atoms/PageContentContainer';
import { Header } from '@/modules/Registration/Header';
import { Form } from '@/modules/Registration/Form';

const RegistrationPage = () => {
  return (
    <>
      <Head>
        <title>Регистрация</title>
      </Head>
      <PageContentContainer>
        <Header />
        <Form />
      </PageContentContainer>
    </>
  );
};

export default RegistrationPage;
