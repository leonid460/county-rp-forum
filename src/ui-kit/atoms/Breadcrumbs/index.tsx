import React from 'react';
import { BreadcrumbsList } from './BreadcrumbsList';
import { IBreadCrumbEntry } from './types';
import { locations } from '@/locations';
import { defineLocationName } from '@/utils/defineLocationName';

export const Breadcrumbs = () => {
  // Заглушка на потом.
  // TODO: сделать норм передачу посещенных страниц из роутера в бреадкрамбсы
  const visitedRoutes = [locations.main.route, locations.forum.route];

  const entries: IBreadCrumbEntry[] = visitedRoutes.map((route) => ({
    route,
    name: defineLocationName(route)
  }));

  return <BreadcrumbsList entries={entries} />;
};
