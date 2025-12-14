import { useState } from 'react'
import './App.css'
import Hello from './components/hello.tsx'
import Websites from './components/websites.tsx'

function App() {
  
  const [view, setView] = useState(<Hello/>)

  return (
    <>
      <div onClick={() => setView(<Websites/>)}>
       {view}
      </div>
    </>
  )
}

export default App
