import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch';
import ProductCard from '../homePage/ProductCard';

const PgeProductItem = ({categoryId,prodId}) => {
    const [productByCategory,setProductByCategoy]=useFetch();
    
    useEffect(() => {
        if (categoryId) {
            const url=`https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${categoryId}`
            setProductByCategoy(url)
            
        }
     
    }, [categoryId])
    const  cbFilter=(prod)=> {
        return prod.id !==+ prodId;
    }
    //console.log(productByCategory)
  return (
    <section >
      <h1>Discover similar tem</h1>
      <div className='productcontainer'>
        {
            productByCategory?.filter(cbFilter).map(prod=>(
                <ProductCard
                key={prod.id}
                prod={prod}
                
                />
            ))
        }
      </div>
    </section>
  )
}

export default PgeProductItem
