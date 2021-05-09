import React from 'react';
import { createPortal } from 'react-dom';

export const PORTAL_CONTAINER_ID = 'portal-container';

export const Portal: React.FC = ({ children }) => {
  const container = document.getElementById(PORTAL_CONTAINER_ID);

  if (!container) {
    return null;
  }

  return createPortal(children, container);
};
