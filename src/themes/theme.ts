import { createBreakpoints } from '@/utils/createBreakpoints';
import { Breakpoints } from '@/ui-kit/constants/global';
import { Colors } from '@/ui-kit/constants/global';
import { ITheme } from '@/themes/types';

export const theme: ITheme = {
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
  }
};

export const darkTheme: ITheme = {
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
  }
};
