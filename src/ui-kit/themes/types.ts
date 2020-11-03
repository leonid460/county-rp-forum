import { IBreakpoints } from 'ui-kit/utils/createBreakpoints';

interface IColors {
  primary: string;
  primaryVariant: string;
  secondary: string;
  secondaryVariant: string;
  border: string;
  background: string;
  surface: string;
  error: string;
  onPrimary: string;
  onSecondary: string;
  onBackground: string;
  onSurface: string;
  onError: string;
}

export interface ITheme {
  breakpoints: IBreakpoints;
  colors: IColors;
}
