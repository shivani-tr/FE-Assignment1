import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import CompanyOverview from './pages/CompanyOverview.jsx'
import Products from './pages/Products.jsx';
import Landing from './components/Landing.jsx'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
import { VARIABLE_NAME as VARIABLE_NAME_NICE } from './store/reducers/companySlice.js';
function App() {
  

  return (
    <Provider store={store}>
      {VARIABLE_NAME_NICE}
      <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/company/:ticker" element={<CompanyOverview />} />
        <Route path="/products" element={<Products/>} />
      </Routes>
    </Router>
    </Provider>
  )
}

export default App
