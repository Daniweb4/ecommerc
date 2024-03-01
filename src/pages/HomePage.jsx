import React, { useEffect, useRef, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { getProductsThunk } from '../store/slices/product.slices';
import ProductCard from '../components/homePage/ProductCard';
import './style/homepage.css'
import SelectCategory from '../components/homePage/SelectCategory';
import FormPrice from '../components/homePage/FormPrice';


const HomePage = () => {
  const [formulario, setformulario] = useState({
    from:0,
    to:Infinity,

  })
  const [selectValue, setSelectValue] = useState(0)
  const [productName, setProductName] = useState('')
   const dispatch=useDispatch()
   const products= useSelector(store=>store.products);

   useEffect(() => {
    const url='https://e-commerce-api-v2.academlo.tech/api/v1/products'
     dispatch(getProductsThunk(url));
   }, []);
   const fitrarproducto = useRef()
   const handleChange=()=> {
    setProductName(fitrarproducto.current.value.toLowerCase().trim())
   }
   const cbFilter=(prod)=>{
    const {from, to}=formulario;
    const byname=prod.title.toLowerCase().includes(productName)
const ByCategory= +selectValue ===0? true : prod.categoryId === +selectValue;
const Byprice=+prod.price > +from && +prod.price < +to;
return byname && ByCategory && Byprice;
   }

   
  return (
    <div className='filter_container'>
    
      <FormPrice
      setformulario={setformulario} />
      <article className='by_section' >
       <div className='by_name' >
       <h3 >By Name</h3>
       <input className='name' ref={fitrarproducto} type='text' onChange={handleChange}/>
       </div>
       
       <div className='container_selector'>
        <SelectCategory
        setSelectValue={setSelectValue}
        />
        </div>
        </article>
        <section className='productcontainer'>

            {
                products?.filter(cbFilter).map(prod=>(
                    <ProductCard
                    key={prod.id}
                    prod={prod}
                    />


                ))
            }
      
        </section>
        </div>
 
  )
}

export default HomePage
