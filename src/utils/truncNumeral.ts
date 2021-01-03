import { round10 } from '@/utils/roundFuncs';

export function truncNumeral(numeral: number): string {
  if (!Math.round(numeral / 1000)) {
    return `${numeral}`;
  }

  if (!Math.round(numeral / 1000000)) {
    return `${round10(numeral / 1000, -1)}K`;
  }

  return `${round10(numeral / 1000000, -1)}M`;
}
