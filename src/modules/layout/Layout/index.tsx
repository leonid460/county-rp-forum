import React from 'react';

import { PageContainer, Content } from './styled';
import { TopPanel } from 'modules/layout/TopPanel';

export const Layout: React.FC = ({ children }) => {
  return (
    <PageContainer>
      <TopPanel />
      <Content>{children}</Content>
    </PageContainer>
  );
};
