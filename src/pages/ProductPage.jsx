import React, { useEffect } from 'react'
import PageProduct from '../components/productPage/PageProduct'
import useFetch from '../hooks/useFetch'
import {useParams} from 'react-router-dom'
import PgeProductItem from '../components/productPage/PgeProductItem'
import SliderImagen from '../components/productPage/SliderImagen'

const ProductPage = () => {
  const [productId,getProductId]=useFetch();
  const param = useParams()
  useEffect(() => {
    const url=`https://e-commerce-api-v2.academlo.tech/api/v1/products/${param.id}`
    getProductId(url)
  }, [param])
  
//console.log(productId)
  return (
    <article>
      <h1>Ecommerce</h1>
      <div className='imagen'>
      <SliderImagen
      images={productId?.images}
     
      />
      </div>
      
      <PageProduct
      productId={productId}
      />
       <PgeProductItem
       categoryId={productId?.categoryId}
       prodId={param.id}
       />

      
    </article>
  )
}

export default ProductPage
