import styled from '@emotion/styled';
import { Gaps } from '@/ui-kit/constants/global';
import { Input as SourceInput } from '@/ui-kit/atoms/Input';
import { CheckBoxWithLabel as SourceCheckBoxWithLabel } from '@/ui-kit/atoms/CheckBoxWithLabel';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${Gaps.Gap16};
  width: 100%;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.surface};

  ${({ theme }) => theme.breakpoints.up('m')} {
    width: 414px;
  }
`;

export const Title = styled.h1`
  padding: 0;
  margin: 0 0 ${Gaps.Gap20} 0;
  color: ${({ theme }) => theme.colors.onSurface};
  ${({ theme }) => theme.typography.h1};
`;

export const Input = styled(SourceInput)`
  margin-bottom: ${Gaps.Gap16};
`;

export const CheckBoxWithLabel = styled(SourceCheckBoxWithLabel)`
  margin-bottom: ${Gaps.Gap20};
`;
