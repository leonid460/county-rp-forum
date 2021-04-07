import styled from '@emotion/styled';
import { Gaps } from '@/ui-kit/constants/global';
import { Input as SourceInput } from '@/ui-kit/atoms/Input';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 176px;
  padding: ${Gaps.Gap16};
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.surface};
`;

export const Input = styled(SourceInput)`
  margin-bottom: ${Gaps.Gap16};
`;
