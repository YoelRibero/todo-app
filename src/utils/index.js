import heroImageMobileLight from '../../assets/images/bg-mobile-light.jpg'
import heroImageDesktopLight from '../../assets/images/bg-desktop-light.jpg'
import heroImageMobileDark from '../../assets/images/bg-mobile-dark.jpg'
import heroImageDesktopDark from '../../assets/images/bg-desktop-dark.jpg'
// Picking image according the app state
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

// Get Todos From localStorage
const allTodos = JSON.parse(window.localStorage.getItem('allTodos')) 
  ? JSON.parse(window.localStorage.getItem('allTodos')) 
  : []
// If localStorage is empty, send array empty. Initial filter always will be 'all'
export const initialState = {
  allTodos: allTodos,
  filter: 'all'
}
