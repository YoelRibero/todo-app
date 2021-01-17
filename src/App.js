import React from 'react'
// REDUX
import { connect } from 'react-redux'
// Styles
import { GlobalStyle, Container } from './styles'
// Components
import Hero from './components/Hero'
import ListOfTodo from './components/ListOfTodo'
import FilterTodo from './components/FilterTodo'
import { Footer } from './components/Footer'

const App = ({ darkTheme }) => (
  <>
    <GlobalStyle darkTheme={darkTheme} />
    <Hero />
    <Container>
      <ListOfTodo />
      <FilterTodo />
      <Footer />
    </Container>
  </>
)

// Send state theme to component
const mapStateToProps = state => {
  return {
    darkTheme: state.darkTheme
  }
}
// Connecting to redux
export default connect(mapStateToProps, null)(App)
