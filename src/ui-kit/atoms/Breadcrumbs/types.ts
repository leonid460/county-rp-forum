export interface IBreadCrumbEntry {
  route: string;
  name: string;
}

export interface IBreadcrumbsProps {
  entries: IBreadCrumbEntry[];
}
