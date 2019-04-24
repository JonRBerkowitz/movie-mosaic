import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import SearchBar from './components/Search/SearchBar'
import MoviesContainer from './containers/MoviesContainer'

class App extends React.Component {
  
  render() {
  return(
    <div>
      <Navigation />
      <SearchBar />
      <MoviesContainer />
    </div>
  )
  }
}

export default App;
