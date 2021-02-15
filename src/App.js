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

const App = ({ darkTheme, filter }) => (
  <>
    <GlobalStyle darkTheme={darkTheme} />
    <Hero />
    <Container>
      <ListOfTodo />
      <FilterTodo />
      {
        filter === 'all' && <Footer />
      }
    </Container>
  </>
)

// Send state theme to component
const mapStateToProps = ({ darkTheme, filter }) => {
  return {
    darkTheme: darkTheme,
    filter: filter
  }
}
// Connecting to redux
export default connect(mapStateToProps, null)(App)
