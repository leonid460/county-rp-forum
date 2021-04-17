import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { BreadcrumbsList } from './BreadcrumbsList';
import { IBreadCrumbEntry } from './BreadcrumbsList/types';
import { locationsMap } from '@/locations';
import { collectRoutes } from './collectRoutes';

export const Breadcrumbs = () => {
  const router = useRouter();
  const pathname = router.asPath;
  const [entries, seEntries] = useState<IBreadCrumbEntry[]>([]);

  useEffect(() => {
    (async function () {
      const newEntries = await collectRoutes(pathname, locationsMap);
      seEntries(newEntries as IBreadCrumbEntry[]);
    })();
  }, [pathname]);

  return <BreadcrumbsList entries={entries} />;
};
