import React from 'react';

export const SvgTripleDots = ({ className }: { className?: string }) => (
  <svg
    width="10"
    height="2"
    viewBox="0 0 10 2"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="1" cy="1" r="1" fill="#717E96" />
    <circle cx="9" cy="1" r="1" fill="#717E96" />
    <circle cx="5" cy="1" r="1" fill="#717E96" />
  </svg>
);
