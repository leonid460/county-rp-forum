import React from 'react';
import { Box } from '@/ui-kit/atoms/Box';

import { PageContainer, Content } from './styled';
import { TopPanel } from '@/modules/layout/TopPanel';
import { Breadcrumbs } from '@/ui-kit/atoms/Breadcrumbs';

export const Layout: React.FC = ({ children }) => {
  return (
    <PageContainer>
      <TopPanel />
      <Content>
        <Box>
          <Breadcrumbs />
          {children}
        </Box>
      </Content>
    </PageContainer>
  );
};
