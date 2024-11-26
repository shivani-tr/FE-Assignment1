import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import TestPage from './pages/TestPage.jsx';
import CompanyOverview from './pages/CompanyOverview.jsx'
import Products from './pages/Products.jsx';
import Landing from './components/Landing.jsx'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
function App() {
  

  return (
    <Provider store={store}>
      <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/company/:ticker" element={<CompanyOverview />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/assignment1" element={<TestPage/>} />
      </Routes>
    </Router>
    </Provider>
  )
}

export default App
