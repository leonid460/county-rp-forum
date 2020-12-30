import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentTheme } from '@/store/themeSlice/selectors';
import { ThemeProvider } from '@emotion/react';
import { GlobalStyles } from '@/modules/layout/GlobalStyles';
import { getDisplayName } from '@/utils/getDisplayName';

export function withThemeAndGlobalStyles<T>(WrappeeComponent: React.ComponentType<T>): React.FC<T> {
  const WithThemeAndGlobalStyles = (props: T) => {
    const currentTheme = useSelector(selectCurrentTheme);
    return (
      <ThemeProvider theme={{ ...currentTheme }}>
        <GlobalStyles theme={currentTheme} />
        <WrappeeComponent {...props} />
      </ThemeProvider>
    );
  };

  WithThemeAndGlobalStyles.displayName = `${getDisplayName(
    WrappeeComponent
  )}WithThemeAndGlobalStyles`;

  return WithThemeAndGlobalStyles;
}
