import React from 'react';

import { PageContainer, Content } from './styled';

export const Layout: React.FC = ({ children }) => {
  return (
    <PageContainer>
      <Content>{children}</Content>
    </PageContainer>
  );
};
