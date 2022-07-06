import { useState } from 'react'

import './App.css'
import SearchAppBar from './component/Nav'
import Cards from './component/Cards'
import {Routes, Route} from 'react-router-dom';
import Description from './component/Description';
import Navbar from './component/Navbar';
import Dashboard from './component/Dashboard';
function App() {

  return (
    <div className="App">
          <Routes>
          < Route path="/" element={<Dashboard/>}/>
          < Route path="/job_desc/:id" element={<Description/>}/>
      </Routes>
    </div>
  )
}

export default App
