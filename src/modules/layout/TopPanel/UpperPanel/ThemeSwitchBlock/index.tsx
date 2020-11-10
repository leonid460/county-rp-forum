import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '@/store/themeSlice/actions';
import { selectCurrentThemeName } from '@/store/themeSlice/selectors';
import { ThemeSwitch } from './ThemeSwitch';

export const ThemeSwitchBlock = () => {
  const dispatch = useDispatch();
  const themeName = useSelector(selectCurrentThemeName);

  const onChange = () => {
    dispatch(toggle());
  };

  return <ThemeSwitch checked={themeName !== 'light'} onChange={onChange} />;
};
