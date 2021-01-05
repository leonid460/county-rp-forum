export interface IBreadCrumbEntry {
  route: string;
  name: string;
}

export interface IBreadcrumbsListProps {
  entries: IBreadCrumbEntry[];
}
