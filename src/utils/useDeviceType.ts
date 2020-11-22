import { useMediaQuery } from '@/utils/useMediaQuery';

export function useDeviceType() {
  const isTablet = useMediaQuery((theme) => theme.breakpoints.up('m'));
  const isLaptop = useMediaQuery((theme) => theme.breakpoints.up('l'));
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('xl'));

  return {
    isDesktop,
    isLaptop: isLaptop && !isDesktop,
    isTablet: isTablet && !isLaptop && !isDesktop,
    isMobile: !isTablet && !isLaptop && !isDesktop
  };
}
