import React from 'react';
import * as Styled from './styled';

interface GoToPrevPageButtonProps {
  children: React.ReactText;
  route: string;
}

interface GoToPrevPagePanelProps {
  prevRoute: string;
  prevRouteName: string;
}

const GoToPrevPageButton = ({ children, route }: GoToPrevPageButtonProps) => (
  <Styled.GoToPrevPageButtonContainer href={route}>
    <Styled.SvgGoToPrevPageButtonArrow />
    <Styled.GoToPrevPageButtonText>{children}</Styled.GoToPrevPageButtonText>
  </Styled.GoToPrevPageButtonContainer>
);

export const GoToPrevPagePanel = ({ prevRoute, prevRouteName }: GoToPrevPagePanelProps) => {
  return (
    <Styled.Container>
      <GoToPrevPageButton route={prevRoute}>{prevRouteName}</GoToPrevPageButton>
    </Styled.Container>
  );
};
