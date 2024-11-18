import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './components/Landing.jsx'
import Dashboard from './components/Dashboard.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-5xl font-bold text-gray-700'>Demo Landing</h1>
     <Dashboard/>
    </>
  )
}

export default App
