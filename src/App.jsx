import { useState } from 'react'

import './App.css'
import SearchAppBar from './component/Nav'
import Cards from './component/Cards'
import {Routes, Route} from 'react-router-dom';
import Description from './component/Description';
function App() {

  return (
    <div className="App">
      <SearchAppBar/>
      <Routes>
          < Route path="/" element={<Cards/>}/>
          < Route path="/job_desc/:id" element={<Description/>}/>
      </Routes>
      {/* <Cards/> */}
    </div>
  )
}

export default App
