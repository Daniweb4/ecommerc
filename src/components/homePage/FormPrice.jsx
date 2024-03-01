import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './styles/formprice.css'
import ModalPage from '../modal/ModalPage';



const FormPrice = ({setformulario}) => {
  const [open, setOpen] = useState(false)
  
    const {handleSubmit,register,reset}=useForm();
    const submit=(data)=>{
        setformulario({
            from:data.from ||0,
            to:data.to || Infinity,
        })

    }
  


  return (
    <>
   <section className='menu'>
    
      <div className='form_filter_price'>
         
         <form id='nave' className='price-oculto' onSubmit={handleSubmit(submit)}>
          <div>
          <label className='label1' htmlFor='from'>From</label>
          <input className='input0' {...register('from')}  id='from' type='number' />
    
          </div>
          <div>
          <label  className='label1'  htmlFor='to'>to</label>
          <input className='input0' {...register('to')}  id='to' type='number' />
    
          </div>
          <button className='btn1'>Filter Price</button>
      
        </form> 
        
      
        
    </div>
    
  
    
    
    </section>
     <div className='container'>
        <ModalPage 
         open={open}
         setOpen={setOpen}
        
        /> 
      </div>
      </>
  );
}

export default FormPrice;
