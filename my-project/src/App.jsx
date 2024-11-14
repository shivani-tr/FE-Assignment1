import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Table from './Table'
import First from './First';
import Second from './Second';

function App() {
  
  

  return (
    <>
     <h1 className='text-5xl font-bold mb-20'>Table Component</h1>
     {/* <h3 className="text-xl text-slate-300 font-semibold">(Just a demo)</h3> */}
     <Router>
      <Routes>
        <Route path='/' element={<First/>}></Route>
        <Route path='/second' element={<Second/>}></Route>
      </Routes>
     </Router>
    </>
  )
}

export default App
