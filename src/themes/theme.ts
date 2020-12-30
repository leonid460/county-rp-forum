import { createBreakpoints } from '@/utils/createBreakpoints';
import { Breakpoints } from '@/ui-kit/constants/global';
import { Colors } from '@/ui-kit/constants/global';
import { TRawTypography } from '@/themes/types';
import { Theme } from '@emotion/react';
import { createTypography } from '@/utils/createTypography';

const typography: TRawTypography = {
  h1: {
    size: 24,
    lineHeight: 28,
    weight: 700
  },
  h2: {
    size: 18,
    lineHeight: 21,
    weight: 400
  },
  h3: {
    size: 16,
    lineHeight: 19,
    weight: 700
  },
  body1: {
    size: 15,
    lineHeight: 18,
    weight: 400
  },
  body2: {
    size: 13,
    lineHeight: 15,
    weight: 400
  },
  button: {
    size: 13,
    lineHeight: 15,
    weight: 500
  }
};

export const theme: Theme = {
  breakpoints: createBreakpoints(Breakpoints),
  colors: {
    primary: Colors.Cobalt,
    primaryVariant: Colors.Azure,
    secondary: Colors.Pigeon,
    secondaryVariant: Colors.WildBlueYonder,
    border: Colors.Lavender,
    background: Colors.Platinum,
    surface: Colors.White,
    error: Colors.UpsdellRed,
    onPrimary: Colors.White,
    onSecondary: Colors.White,
    onBackground: Colors.Vantablack,
    onSurface: Colors.Vantablack,
    onError: Colors.White
  },
  typography: createTypography(typography)
};

export const darkTheme: Theme = {
  breakpoints: createBreakpoints(Breakpoints),
  colors: {
    primary: Colors.Heliotrope,
    primaryVariant: Colors.Deluge,
    secondary: Colors.WildBlueYonder,
    secondaryVariant: Colors.Pigeon,
    border: Colors.Nero,
    background: Colors.CodGray,
    surface: Colors.MineShaft,
    error: Colors.UpsdellRed,
    onPrimary: Colors.CodGray,
    onSecondary: Colors.CodGray,
    onBackground: Colors.Alto,
    onSurface: Colors.Alto,
    onError: Colors.Alto
  },
  typography: createTypography(typography)
};
