
import { useState } from 'react'

import {BrowserRouter, Routes,Route,Link  } from 'react-router-dom'
import Home from './Components/Pages/Home'
import Contato from './Components/Pages/Contato'
import Novo from './Components/Pages/Novo'

function App() {
  const [count, setCount] = useState(0)

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
