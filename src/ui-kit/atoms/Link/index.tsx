import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { getNestedRoutes } from '@/utils/getNestedRoutes';
import { isObject } from '@/utils/isObject';
import { ILinkProps } from './types';
import { UrlObject } from 'url';

function addPrefixSlash(href: string) {
  if (href[0] === '#') {
    return href;
  }

  return '/' + href;
}

function defineRelativePath(href: string | UrlObject) {
  if (isObject(href)) {
    return (href as UrlObject).pathname[0] !== '/';
  }

  return href[0] !== '/';
}

function handleRelativePath(href: string | UrlObject, currentPath: string) {
  const hashTagRegexp = /#.*$/;
  const pathWithoutHashTag = currentPath.replace(hashTagRegexp, '');
  let hrefPath: string;

  if (isObject(href)) {
    hrefPath = (href as UrlObject).pathname;

    return {
      ...(href as UrlObject),
      pathname: pathWithoutHashTag + addPrefixSlash(hrefPath)
    };
  } else {
    hrefPath = href as string;

    return pathWithoutHashTag + addPrefixSlash(hrefPath);
  }
}

export const Link: React.FC<ILinkProps> = ({
  linkAs,
  children,
  href,
  className,
  key,
  ...props
}) => {
  const router = useRouter();
  const pathname = router.pathname;
  const isRelativeHRef = defineRelativePath(href);
  const pathTokens = getNestedRoutes(pathname);
  let classList = className;
  let correctedHref = href;

  if (pathTokens.find((token) => token === href)) {
    classList += ' active';
  }

  if (isRelativeHRef) {
    correctedHref = handleRelativePath(href, router.asPath);
  }

  return (
    <NextLink href={correctedHref} key={key} as={linkAs}>
      <a className={classList} {...props}>
        {children}
      </a>
    </NextLink>
  );
};
