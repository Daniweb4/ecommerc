import {Routes,Route} from 'react-router-dom'

import './App.css'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage'
import PurchasesPage from './pages/PurchasesPage';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import Header from './components/shared/Header';
import Privacidad from './pages/Privacidad';



function App() {

  return (
    <div >
      <Header/>
      
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/products/:id' element={<ProductPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
      <Route element={<Privacidad />} >
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/purchases' element={<PurchasesPage/>}/>
      </Route>
      </Routes>
    </div>
  )
}

export default App
