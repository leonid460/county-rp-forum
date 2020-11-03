import { createBreakpoints } from 'ui-kit/utils/createBreakpoints';
import { Breakpoints } from 'ui-kit/constants/global';
import { Colors } from 'ui-kit/constants/global';
import { ITheme } from 'ui-kit/themes/types';

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
