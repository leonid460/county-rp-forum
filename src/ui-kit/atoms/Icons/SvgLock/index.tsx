import React from 'react';

export const SvgLock = ({ className }: { className?: string }) => (
  <svg
    width="8"
    height="12"
    viewBox="0 0 8 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 4.25H6.5V3.25C6.5 1.87 5.38 0.75 4 0.75C2.62 0.75 1.5 1.87 1.5 3.25V4.25H1C0.45 4.25 0 4.7 0 5.25V10.25C0 10.8 0.45 11.25 1 11.25H7C7.55 11.25 8 10.8 8 10.25V5.25C8 4.7 7.55 4.25 7 4.25ZM4 8.75C3.45 8.75 3 8.3 3 7.75C3 7.2 3.45 6.75 4 6.75C4.55 6.75 5 7.2 5 7.75C5 8.3 4.55 8.75 4 8.75ZM2.5 3.25V4.25H5.5V3.25C5.5 2.42 4.83 1.75 4 1.75C3.17 1.75 2.5 2.42 2.5 3.25Z"
      fill="black"
      fillOpacity="0.54"
    />
  </svg>
);
