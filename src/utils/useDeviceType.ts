import { useMediaQuery } from '@/utils/useMediaQuery';

export function useDeviceType() {
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('xl'));
  const isLaptop = useMediaQuery((theme) => theme.breakpoints.up('l'));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.up('m'));

  return {
    isDesktop,
    isLaptop: isLaptop && !isDesktop,
    isTablet: isTablet && !isLaptop && !isDesktop,
    isMobile: !isTablet && !isLaptop && !isDesktop
  };
}
