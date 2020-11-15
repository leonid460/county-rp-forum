export interface IRawBreakPoints {
  xs: number;
  s: number;
  m: number;
  xm: number;
  xxm: number;
  l: number;
  xl: number;
  xxl: number;
}

export type TBreakpointsKeyDefault = keyof IRawBreakPoints;
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TBreakpointsKeyOverrides {}
export type TBreakpointsKey = TBreakpointsKeyDefault & TBreakpointsKeyOverrides;

export interface IBreakpoints {
  up: (key: TBreakpointsKey) => string;
  down: (key: TBreakpointsKey) => string;
}

export function createBreakpoints(rawBreakpoints: IRawBreakPoints): IBreakpoints {
  const upBreakpoints = {};
  const downBreakpoints = {};

  Object.entries(rawBreakpoints).forEach(([key, value]) => {
    upBreakpoints[key] = makeMinBreakpointItem(value);
    downBreakpoints[key] = makeMaxBreakpointItem(value);
  });

  return {
    up: (key: TBreakpointsKey) => upBreakpoints[key],
    down: (key: TBreakpointsKey) => downBreakpoints[key]
  };
}

function makeMinBreakpointItem(rawBreakpoint: number) {
  return `@media screen and (min-width: ${rawBreakpoint}px)`;
}

function makeMaxBreakpointItem(rawBreakpoint: number) {
  return `@media screen and (max-width: ${rawBreakpoint}px)`;
}
