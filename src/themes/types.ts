import { IBreakpoints } from '@/utils/createBreakpoints';

export interface IColors {
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
  typography: TTypography;
}

export interface ITypographyUnit {
  weight: number;
  size: number;
  lineHeight: number;
}

export type TTypographyKey = 'h1' | 'h2' | 'h3' | 'body1' | 'body2' | 'button';

export type TRawTypography = {
  [key in TTypographyKey]: ITypographyUnit;
};

export type TTypography = {
  [key in TTypographyKey]: string;
};
