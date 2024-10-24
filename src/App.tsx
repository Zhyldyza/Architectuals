import { useState } from 'react'
import HomePage from './pages/home/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HomePage className="w-full"/> 
    </>
  )
}

export default App
