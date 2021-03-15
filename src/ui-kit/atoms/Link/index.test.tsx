import React from 'react';
import { Link } from './index';
import { beforeEach, describe } from '@jest/globals';
import { render } from '@testing-library/react';
import { useRouter } from 'next/router';

jest.mock('next/router');

beforeEach(() => {
  (useRouter as jest.Mock).mockReturnValue({ pathname: '/', asPath: '/' });
});

describe('Testing <Link /> component', () => {
  const text = 'Forum 3';

  it('renders OK', () => {
    const { getByText } = render(<Link href="/">{text}</Link>);
    const renderedLink = getByText(text);

    expect(renderedLink).toHaveTextContent(text);
  });

  it('handles absolute href', () => {
    const href = '/forum/forum-3';

    const { getByText } = render(<Link href={href}>{text}</Link>);
    const renderedLink = getByText(text);

    expect(renderedLink.getAttribute('href')).toBe(href);
  });

  it('handles relative href', () => {
    const currentPath = '/forum';

    (useRouter as jest.Mock).mockReturnValue({ pathname: currentPath, asPath: currentPath });
    const href = 'forum-3';

    const { getByText } = render(<Link href={href}>{text}</Link>);
    const renderedLink = getByText(text);

    expect(renderedLink.getAttribute('href')).toBe(`${currentPath}/${href}`);
  });

  it('handles hashes', () => {
    const href1 = '#tag1';
    const href2 = '#tag2';
    const initialPath = `/${href1}`;

    (useRouter as jest.Mock).mockReturnValue({ pathname: initialPath, asPath: initialPath });

    const { getByText } = render(<Link href={href2}>{text}</Link>);
    const renderedLink = getByText(text);

    expect(renderedLink.getAttribute('href')).toBe(`/${href2}`);
  });

  it('handles proper href when current path contains hash', () => {
    const base = '/forum/forum-3';
    const initialPath = '/forum/forum-3#hello-there';
    const relativeHref = 'topic/topic-54';
    const desiredGeneratedHref = `${base}/${relativeHref}`;

    (useRouter as jest.Mock).mockReturnValue({ pathname: initialPath, asPath: initialPath });

    const { getByText } = render(<Link href={relativeHref}>{text}</Link>);
    const renderedElement = getByText(text);

    expect(renderedElement.getAttribute('href')).toBe(desiredGeneratedHref);
  });
});
