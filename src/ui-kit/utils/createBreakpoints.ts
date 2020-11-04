export interface IRawBreakPoints {
  s: number;
  m: number;
  l: number;
}

export type TBreakpointsKeyDefault = 's' | 'm' | 'l' | 'xl';
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
