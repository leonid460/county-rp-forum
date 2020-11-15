import { IRawBreakPoints } from '@/utils/createBreakpoints';

export enum Gaps {
  Gap4 = '4px',
  Gap8 = '8px',
  Gap16 = '16px',
  Gap24 = '24px',
  Gap32 = '32px',
  Gap40 = '40px',
  Gap48 = '48px',
  Gap64 = '64px'
}

export enum Colors {
  Vantablack = '#000000',
  CodGray = '#131313',
  MineShaft = '#202020',
  Nero = '#2C2C2C',
  UpsdellRed = '#B00020',
  Heliotrope = '#BB85FC',
  Deluge = '#75579F',
  Cobalt = '#0653C0',
  Azure = '#044096',
  Pigeon = '#717E96',
  WildBlueYonder = '#A0B2D1',
  Lavender = '#E6EBEE',
  Alto = '#DDDDDD',
  Platinum = '#EDF1F4',
  White = '#FFFFFF'
}

export const Margins: IRawBreakPoints = {
  xs: 16,
  s: 16,
  m: 50,
  xm: 84,
  xxm: 118,
  l: 170,
  xl: 250,
  xxl: 410
};

export const Breakpoints: IRawBreakPoints = {
  xs: 320,
  s: 480,
  m: 768,
  xm: 1024,
  xxm: 1280,
  l: 1440,
  xl: 1600,
  xxl: 1920
};
