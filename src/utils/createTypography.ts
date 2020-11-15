import { TRawTypography, TTypography } from '@/themes/types';

export function createTypography(rawTypography: TRawTypography) {
  const resultTypography = {};

  Object.entries(rawTypography).forEach(([key, typographyUnit]) => {
    resultTypography[key] = `
      font-size: ${typographyUnit.size}px;
      line-height: ${typographyUnit.lineHeight}px;
      font-weight: ${typographyUnit.weight};
    `;
  });

  return resultTypography as TTypography;
}
