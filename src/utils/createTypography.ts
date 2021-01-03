import {
  TRawTypography,
  TTypography,
  ITypographyUnit,
  ITypographyUnitInMediaQuery
} from '@/themes/types';

export function createTypography(rawTypography: TRawTypography) {
  const resultTypography = {};

  Object.entries(rawTypography).forEach(([key, typographyUnit]) => {
    resultTypography[key] = createTypographyUnit(typographyUnit);
  });

  return resultTypography as TTypography;
}

function createTypographyUnit(typographyUnit: ITypographyUnit | ITypographyUnitInMediaQuery) {
  const mediaQueries = Object.entries(typographyUnit).filter((entry) => entry[0][0] === '@');

  let resultUnit = createBaseTypographyUnit(typographyUnit as ITypographyUnit);

  if (mediaQueries.length) {
    const sortedMediaQueries = sortMediaQueries(mediaQueries);

    sortedMediaQueries.forEach((queryAndTypographyTuple) => {
      resultUnit += `
        ${queryAndTypographyTuple[0]} {
          ${createBaseTypographyUnit(queryAndTypographyTuple[1])}
        }
      `;
    });
  }

  return resultUnit;
}

function createBaseTypographyUnit(typographyUnit: ITypographyUnit) {
  return `
    ${typographyUnit.size ? `font-size: ${typographyUnit.size}px;` : ''}
    ${typographyUnit.lineHeight ? `line-height: ${typographyUnit.lineHeight}px;` : ''}
    ${typographyUnit.weight ? `font-weight: ${typographyUnit.weight};` : ''}
  `;
}

function sortMediaQueries(mediaQueries: [string, ITypographyUnit][]) {
  return mediaQueries.sort((first, second) => {
    const widthOfFirst = getMediaQueryWidth(first[0]);
    const widthOfSecond = getMediaQueryWidth(second[0]);

    return Number(widthOfFirst) - Number(widthOfSecond);
  });
}

function getMediaQueryWidth(mediaQueryKey: string) {
  return mediaQueryKey.match(/(min-width):(.*?)px/)[2];
}
