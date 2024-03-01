import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { postCartThunk, updateCartThunk } from '../../store/slices/cart.slices';


const PageProduct = ({productId}) => {
    
    const [quantity,setQuantity] = useState(1);
    const dispatch= useDispatch()
    const cart= useSelector(store=>store.cart)

    const handleMen=() =>{
        if (quantity>1) {
            setQuantity(quantity-1)
            
        }
    }
    const handleMas=() =>{
        setQuantity(quantity+1)
        
    }
    const handleAddToCart = () => {
      const item = cart.filter(prod=>
        prod.productId===productId.id)
      if (item[0]) {
        dispatch(updateCartThunk(...item, quantity))
        
      }else{
        dispatch(postCartThunk({
          quantity:quantity,
          productId:productId.id,
        }));

      }
    
    }
  //  console.log(productId)
  return (
    <div>
        <div>
        <h2>{productId?.brand} </h2>
        <h3>{productId?.title}</h3>
        <p>{productId?.description}</p>
        </div>
        <div>
          <ul>
            <li>Price</li>
            <li>$ {productId?.price}</li>
          </ul>
            <p>Quantity</p>
            <button onClick={handleMen}>-</button>
            <span>{quantity}</span>
            <button onClick={handleMas}>+</button>
            </div>
        <button onClick={handleAddToCart}>Add to Cart</button>
        
      
    </div>
  );
}

export default PageProduct;
