import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Board } from './components/Board'

function App() {

  return (
    <>
      
      <div className='flex flex-col justify-center items-center mt-10'>
        <div className='mb-10'>
          <h1 className='font-bold text-7xl text-cyan-500'>Tic Tac Toe</h1>
        </div>
       <Board/>
      </div>
      
    </>
  )
}

export default App
