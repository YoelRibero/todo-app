import React from 'react'
import { Container } from '../../styles'
import { HeroContent } from './styles'

import { useMobile } from '../../hooks/useMobile'
import { imageHero } from '../../utils'

import Todo from '../Todo'

import iconMoon from '../../../assets/images/icon-moon.svg'
import iconSun from '../../../assets/images/icon-sun.svg'

export const Hero = ({ darkTheme, setDarkTheme }) => {
  const { mobile } = useMobile()
  const handleDarkTheme = () => {
    setDarkTheme(!darkTheme)
    window.localStorage.setItem('darkTheme', JSON.stringify(!darkTheme))
  }
  return (
    <>
      <img
        src={imageHero({ mobile, darkTheme})}
        alt="Hero"
      />
      <Container>
        <HeroContent darkTheme={darkTheme}>
          <h1>Todo</h1>
          <img
            src={darkTheme ? iconSun : iconMoon}
            alt="Icon Moon"
            onClick={handleDarkTheme}
          />
          <Todo 
            darkTheme = {darkTheme}
          />
        </HeroContent>
      </Container>
    </>
  );
}
