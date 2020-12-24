import React, { useState } from 'react'
import { GlobalStyle, Container } from './styles'

import { Hero } from './components/Hero'
import ListOfTodo from './components/ListOfTodo'
import FilterTodo from './components/FilterTodo'

export const App = () => {
  const darkThemeExist = JSON.parse(window.localStorage.getItem('darkTheme'))
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
