import React from 'react'
import {useDispatch} from 'react-redux'
import { deleteCartThunk, updateCartThunk } from '../../store/slices/cart.slices';
import './stile/cartproduct.css'
const CartPtroducts = ({prod})=> {

    const dispatch= useDispatch();
    const handleLes=()=>{
      if(prod.quantity>1) {
        dispatch(updateCartThunk(prod,-1))
        
      }  
    }
    const handlePlus=()=>{
      dispatch(updateCartThunk(prod, 1))

    }
    const remove=() => {
        dispatch(deleteCartThunk(prod.id))
    }


  return (
  prod.product &&
    <div className='cartproduct'>
        <figure>
            <img src={prod.product.images[0].url}  alt="images"/>
        </figure>
        <div>
            <h2>{prod.product.title}</h2>
            <button onClick={handleLes}>-</button>
            <span>{prod.quantity}</span>
            <button onClick={handlePlus}>+</button>
            <h3>Total Product $ {prod.product.price*prod.quantity}</h3>
      
       </div>
          <button onClick={remove}>Delete</button>
      
    </div>
  )
}

export default CartPtroducts
