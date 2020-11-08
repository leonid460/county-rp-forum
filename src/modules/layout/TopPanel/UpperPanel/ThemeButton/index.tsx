import React from 'react';
import * as Styled from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '@/store/themeSlice/actions';
import { selectCurrentThemeName } from '@/store/themeSlice/selectors';

export const ThemeButton = () => {
  const dispatch = useDispatch();
  const themeName = useSelector(selectCurrentThemeName);

  const onChange = () => {
    dispatch(toggle());
  };

  return (
    <Styled.Wrapper>
      <Styled.Checkbox checked={themeName !== 'light'} onChange={onChange} />
      <Styled.Slider />
    </Styled.Wrapper>
  );
};
