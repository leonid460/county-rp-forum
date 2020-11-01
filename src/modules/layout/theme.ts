import { createBreakpoints } from 'utils/createBreakpoints';
import { breakpoints } from './breakpoints';
import { Colors } from 'ui-kit/styles/global';
import { ITheme } from 'types/theme';

export const theme: ITheme = {
  breakpoints: createBreakpoints(breakpoints),
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
