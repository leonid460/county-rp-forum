import { useEffect, useState } from 'react';
import { ITheme } from '@/themes/types';
import { useTheme } from '@emotion/react';

function removerSubString(str: string, subStr: string) {
  const beginOfSubstr = str.indexOf(subStr);
  const endOfSubstr = beginOfSubstr + subStr.length - 1;

  if (beginOfSubstr === -1) {
    return str;
  }

  return str.slice(0, beginOfSubstr) + str.slice(endOfSubstr + 1);
}

function checkMediaQuery(queryText: string) {
  if (!process.browser) {
    return false;
  }

  return window.matchMedia(queryText).matches;
}

export function useMediaQuery<Theme = ITheme>(query: (theme: Theme) => string): boolean {
  const [mediaQueryMatch, setMediaQueryMatch] = useState(false);
  const theme = useTheme<Theme>();
  const queryText = query(theme);
  const changedQuery = removerSubString(queryText, '@media');

  useEffect(() => {
    const onWindowWidthChange = () => {
      setMediaQueryMatch(checkMediaQuery(changedQuery));
    };

    if (process.browser) {
      window.addEventListener('resize', onWindowWidthChange);
      onWindowWidthChange();
    }

    return () => {
      window.removeEventListener('resize', onWindowWidthChange);
    };
  }, [changedQuery]);

  return mediaQueryMatch;
}
