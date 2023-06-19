
import { useState } from 'react'

import {BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './Components/Pages/Home'
import Contato from './Components/Pages/Contato'
import Novo from './Components/Pages/Novo'

function App() {
  // eslint-disable-next-line no-empty-pattern
  const [] = useState(0)

  return (
    <BrowserRouter>
    
   
    
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Contato' element={<Contato />} />
          <Route path='/Home' element={<Home/>} />
          
          <Route path='/Novo' element={<Novo/>} />

        </Routes>
        
    </BrowserRouter>
  )
}

export default App
