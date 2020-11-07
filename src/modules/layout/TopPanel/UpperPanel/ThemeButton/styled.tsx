import React from 'react';
import styled from 'utils/styled';

export const Wrapper = styled.label`
  position: relative;
  display: inline-block;

  width: 2.4rem;
  height: 1.3rem;
  box-sizing: content-box;
  border: 0.12rem solid ${({ theme }) => theme.colors.border};
  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.background};
  margin-right: 15px;
`;

export const Slider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: -1px;
  bottom: 0;

  border-radius: 1rem;

  transition: background 0.2s;
  cursor: pointer;

  &::before {
    content: '';

    position: absolute;
    left: 0.15rem;
    top: 50%;
    transform: translateY(-50%);

    height: 1rem;
    width: 1rem;
    box-sizing: border-box;
    border-radius: 0.5rem;
    border: 0.1rem solid ${({ theme }) => theme.colors.onBackground};

    background: url('/media/theme-toggler-icons/sun.svg') center no-repeat;
    background-size: contain;
    transition: transform 0.2s, width 0.2s, background 0.2s;
  }
`;

export const Checkbox = styled((props) => (
  <input type="checkbox" {...props} data-theme-toggle="true" />
))`
  opacity: 0;
  width: 0;
  height: 0;

  &:not(:checked):active + span::before {
    width: 1.5rem;
    background: url('/media/theme-toggler-icons/sun.svg') center no-repeat;
    background-size: contain;
  }

  &:checked:active + span::before {
    width: 1.5rem;
    transform: translate(0.6rem, -50%);
  }

  &:checked + span::before {
    background: url('/media/theme-toggler-icons/moon.svg') center no-repeat;
    background-size: contain;
    transform: translate(1.1rem, -50%);
  }
`;
