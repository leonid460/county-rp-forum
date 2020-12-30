import '@emotion/react';
import { IColors, TTypography } from '@/themes/types';
import { IBreakpoints } from '@/utils/createBreakpoints';

declare module '@emotion/react' {
  export interface Theme {
    breakpoints: IBreakpoints;
    colors: IColors;
    typography: TTypography;
  }
}
