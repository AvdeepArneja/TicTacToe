import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Board } from './components/Board'

function App() {

  return (
    <>
      <div className='flex justify-center items-center mt-10'>
       <Board/>
      </div>
      
    </>
  )
}

export default App
