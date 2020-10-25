import React from 'react';
import styled from "@emotion/styled";
import Head from "next/head";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  
  background: red;
`;

const Forum = () => (
  <>
    <Head>
      <title>Forum</title>
    </Head>
    <Container />
  </>
)

export default Forum;