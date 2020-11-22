import { locations } from '@/locations';

export function defineLocationName(inputRoute: string) {
  let nameOfFoundLocation = '';

  Object.values(locations).forEach(({ name, route }) => {
    if (route === inputRoute) {
      nameOfFoundLocation = name;
    }
  });

  return nameOfFoundLocation;
}
