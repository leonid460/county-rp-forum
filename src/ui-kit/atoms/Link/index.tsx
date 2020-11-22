import React, { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

export const Link: React.FC<DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>> = ({ children, href, className, key, ...props }) => {
  const pathname = useRouter().pathname;
  let classList = className;

  if (pathname === href) {
    classList += ' active';
  }

  return (
    <NextLink href={href} key={key}>
      <a className={classList} {...props}>
        {children}
      </a>
    </NextLink>
  );
};
