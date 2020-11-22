import React, { useState } from 'react';

export function useCollapsible() {
  const collapsibleRef = React.useRef<HTMLDivElement>(null);
  const [collapsibleContentHeight, setCollapsibleContentHeight] = useState<number | string>(null);

  React.useEffect(() => {
    setCollapsibleContentHeight(getContentHeight(collapsibleRef.current));
  }, [collapsibleRef]);

  return {
    ref: collapsibleRef,
    maxHeight: collapsibleContentHeight
  };
}

function getContentHeight(element: HTMLElement | null): number | string {
  return element?.scrollHeight || 'initial';
}
