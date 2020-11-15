import { IBreakpoints, IRawBreakPoints } from '@/utils/createBreakpoints';

export function generateBoxWidth(breakpoints: IBreakpoints, margins: IRawBreakPoints) {
  let breakpointsCSS = '';
  const marginTuples = Object.entries(margins);

  breakpointsCSS += `width: calc(100% - ${marginTuples[0][1] * 2}px);`;

  marginTuples.slice(1).forEach(([breakpointName, marginValue]) => {
    breakpointsCSS += `
      ${breakpoints.up(breakpointName as keyof IRawBreakPoints)} {
        width: calc(100% - ${marginValue * 2}px);
      }
    `;
  });

  return breakpointsCSS;
}
