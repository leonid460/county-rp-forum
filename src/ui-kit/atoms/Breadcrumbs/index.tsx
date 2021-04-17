import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { BreadcrumbsList } from './BreadcrumbsList';
import { IBreadCrumbEntry } from './BreadcrumbsList/types';
import { locationsMap } from '@/locations';
import { collectRoutes } from './collectRoutes';
import { GoToPrevPagePanel } from './GoToPrevPagePanel';
import { useDeviceType } from '@/utils/useDeviceType';
import { Box } from '@/ui-kit/atoms/Box';

export const Breadcrumbs = () => {
  const { isMobile } = useDeviceType();
  const router = useRouter();
  const pathname = router.asPath;
  const [entries, seEntries] = useState<IBreadCrumbEntry[]>([]);

  useEffect(() => {
    (async function () {
      const newEntries = await collectRoutes(pathname, locationsMap);
      seEntries(newEntries as IBreadCrumbEntry[]);
    })();
  }, [pathname]);

  if (isMobile) {
    if (entries.length < 2) {
      return null;
    }

    const prevEntry = entries[entries.length - 2];

    return <GoToPrevPagePanel prevRoute={prevEntry.route} prevRouteName={prevEntry.name} />;
  }

  return (
    <Box>
      <BreadcrumbsList entries={entries} />
    </Box>
  );
};
