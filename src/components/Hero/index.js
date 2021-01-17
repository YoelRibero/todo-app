import React from 'react'
// REDUX
import { connect } from 'react-redux'
import { changeTheme } from '../../redux/actions'
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

const Hero = ({ darkTheme, changeTheme }) => {
  // Save var mobile to know page viewport
  const { mobile } = useMobile()
  // Handle of dark theme event when click on iconSun or iconMoon
  const handleDarkTheme = () => {
    // Set theme with negation of darkTheme value
    changeTheme()
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
            alt={darkTheme ? 'Icon Sun' : 'Icon Moon'}
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

// Send darkTheme state to component
const mapStateToProps = state => {
  return {
    darkTheme: state.darkTheme
  }
}
// Dispatch action changeTheme from component
const mapDispatchToProps = {
  changeTheme
}
// Conecting with Redux
export default connect(mapStateToProps, mapDispatchToProps)(Hero)
