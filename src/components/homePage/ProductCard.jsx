import React from 'react';
import './styles/productcard.css'
import {useNavigate} from 'react-router-dom'
const ProductCard = ({prod}) => {

  const navigate=useNavigate()
  
    const handleView=()=>{
      navigate(`/products/${prod.id}`)
      
        
    }
  return (
    <article className='productcard'>
        <figure onClick={handleView} className='image_container'>
            <img className='image_product' src={prod.images[0].url}  />
            <img className='image_product' src={prod.images[1].url}  />
        </figure>
        <hr/>
        <div >
          <ul className='productcard_info'> 
            <li><span>{prod.brand} </span><span>{prod.title}</span></li>
            <li><span>Price</span><span>$ {prod.price} </span></li>

          </ul>
        </div>
        <div className='productbtncard'> 
        <button className='btnproduct'>Add  to cart</button>
        <button onClick={handleView} className='btnproduct'>view more</button>
        </div>
       
        
      
    </article>
  );
}

export default ProductCard;
