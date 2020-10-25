import React, {AnchorHTMLAttributes, DetailedHTMLProps} from 'react';
import NextLink from "next/link";

export const Link: React.FC<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>> = ({ children, href, ...props }) => (
  <NextLink href={href}>
    <a {...props}>{children}</a>
  </NextLink>
);
