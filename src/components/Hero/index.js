import React from 'react'
// Styles
import { Container } from '../../styles'
import { HeroContent } from './styles'
// Custom Hook and util from heroImage
import { useMobile } from '../../hooks/useMobile'
import { imageHero } from '../../utils'
// Component
import Todo from '../Todo'
// Images
import iconMoon from '../../../assets/images/icon-moon.svg'
import iconSun from '../../../assets/images/icon-sun.svg'

export const Hero = ({ darkTheme, setDarkTheme }) => {
  // Save var mobile to know page viewport
  const { mobile } = useMobile()
  // Handle of dark theme event when click on iconSun or iconMoon
  const handleDarkTheme = () => {
    // Set theme with negation of darkTheme value
    setDarkTheme(!darkTheme)
    // Set value of darkTheme in localStorage
    window.localStorage.setItem('darkTheme', JSON.stringify(!darkTheme))
  }
  return (
    <>
      <img
        src={imageHero({ mobile, darkTheme})}
        alt='Hero'
      />
      <Container>
        <HeroContent darkTheme={darkTheme}>
          <h1>Todo</h1>
          <img
            src={darkTheme ? iconSun : iconMoon}
            alt='Icon Moon'
            onClick={handleDarkTheme}
          />
          <Todo 
            darkTheme = {darkTheme}
          />
        </HeroContent>
      </Container>
    </>
  )
}
