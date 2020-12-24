import heroImageMobileLight from '../../assets/images/bg-mobile-light.jpg'
import heroImageDesktopLight from '../../assets/images/bg-desktop-light.jpg'
import heroImageMobileDark from '../../assets/images/bg-mobile-dark.jpg'
import heroImageDesktopDark from '../../assets/images/bg-desktop-dark.jpg'

export const imageHero = ({ mobile, darkTheme }) => {
  if (mobile && darkTheme) {
    return heroImageMobileDark
  } else if (mobile && !darkTheme) {
    return heroImageMobileLight
  } else if (!mobile && darkTheme) {
    return heroImageDesktopDark
  } else {
    return heroImageDesktopLight
  }
}
