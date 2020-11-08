import { useTheme as protoUseTheme } from 'emotion-theming';
import { ITheme } from '@/themes/types';

export function useTheme() {
  return protoUseTheme<ITheme>();
}
