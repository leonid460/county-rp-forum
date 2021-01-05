export interface ILocation {
  dynamic?: true;
  route: string;
  name?: string;
  nameResolver?: (id: string) => Promise<string>;
}

export interface ILocationsMapItemValue {
  name?: string;
  dynamic?: true;
  nameResolver?: (id: string) => Promise<string>;
}
