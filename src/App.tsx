import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='bg-main h-screen flex flex-col'>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App