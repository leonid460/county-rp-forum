import React from 'react';
import NextLink from 'next/link';

type INextLinkProps = React.ComponentProps<typeof NextLink>;

export interface ILinkProps extends INextLinkProps {
  className?: string;
  key?: string;
  linkAs?: INextLinkProps['as'];
}
