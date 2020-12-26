import React, { useState } from 'react'
// Styles
import { GlobalStyle, Container } from './styles'
// Components
import { Hero } from './components/Hero'
import ListOfTodo from './components/ListOfTodo'
import FilterTodo from './components/FilterTodo'

export const App = () => {
  // Get DarkTheme from localStorage
  const darkThemeExist = JSON.parse(window.localStorage.getItem('darkTheme'))
  // SetState darkTheme with hook useState
  const [darkTheme, setDarkTheme] = useState(darkThemeExist)
  return (
    <>
      <GlobalStyle
        darkTheme={darkTheme}
      />
      <Hero
        darkTheme={darkTheme}
        setDarkTheme={setDarkTheme}
      />
      <Container>
        <ListOfTodo
          darkTheme={darkTheme}
        />
        <FilterTodo
          darkTheme={darkTheme}
        />
      </Container>
    </>
  )
}
