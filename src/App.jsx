import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import SearchAppBar from './component/Nav'
import Cards from './component/Cards'

function App() {

  return (
    <div className="App">
      <SearchAppBar/>
      <Cards/>
    </div>
  )
}

export default App
