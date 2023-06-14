
import { useState } from 'react'

import {BrowserRouter, Routes,Route,Link  } from 'react-router-dom'
import Home from './Components/Pages/Home'
import Contato from './Components/Pages/Contato'
import Novo from './Components/Pages/Novo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <nav>
          <ul>
            <li>
              <Link to='/Contato'>Contato</Link>
            </li>
            <li>
              <Link to='/Home'>Home</Link>
            </li>
            <li>
              <Link to='Novo'>Novo</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Inicio/>} />
          <Route path='/Contato' element={<Contato />} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/Novo' element={<Novo/>} />

        </Routes>
    </BrowserRouter>
  )
}

export default App
