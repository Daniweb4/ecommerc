import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { getCartThunk, setCart } from '../store/slices/cart.slices';
import CartPtroducts from '../components/cartPage/CartPtroducts';
import useAuth from '../hooks/useAuth'
import getToken from '../utils/getToken';

const CartPage = () => {
  const cart=useSelector(store=>store.cart);
  const dispatch=useDispatch();
  const create=useAuth()

  useEffect(() => {
   dispatch(getCartThunk());
  }, [])

  
  const total=()=>{
    return cart.reduce((ac, cv) =>
     ac + (cv.quantity * cv.product.price),0)
  }
  const buy=()=>{
    const url='https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
    create(url, '', getToken());
    dispatch(setCart([]))
  }
  return (
    
    <div>
      {
        cart?.map(prod =>(
          <CartPtroducts
          key={prod.id}
          prod={prod}
          
          />

        ))
      }
      <div>
      <h2>total buy : $ {total()}</h2>
      <button onClick={buy}>buy</button>

      </div>
    </div>
  )
}

export default CartPage
