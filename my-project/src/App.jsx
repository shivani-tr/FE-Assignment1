import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from './Table'

function App() {
  
  const header = ['Company', 'Contact', 'Country'];
  const data = [
    { Company: 'Alfedro Fransis', Contact: 'Maria Jones', Country: 'USA' },
    { Company: 'Smith and co', Contact: 'Shawn Trevor', Country: 'Canada' },
    { Company: 'Green olives', Contact: 'Ben Illinois', Country: 'UK' },
  ]


  return (
    <>
     <h1 className='text-5xl font-bold '>Table Component</h1>
     <Table headers={header} data={data}/>
    </>
  )
}

export default App
