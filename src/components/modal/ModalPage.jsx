import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import './modal.css'
const ModalPage = ({open, setOpen,setformulario}) => {
    const {handleSubmit,register,reset}=useForm();
    
    const submit=(data)=>{
        setformulario({
            from:data.from ||0,
            to:data.to || Infinity,
        })

    }
    const handleOpeb =()=>{
        setOpen(!open)

    }
   
  return (
    <div className='form-v' > 
        {
            open ? 
                <form id='nave' className='price-oculto' onSubmit={handleSubmit(submit)}>
                     <button className='btnClose' onClick={handleOpeb}>X</button>
                <div>
                <label htmlFor='from'>From</label>
                <input {...register('from')}  id='from' type='text' />
          
                </div>
                <div>
                <label htmlFor='to'>to</label>
                <input {...register('to')}  id='to' type='text' />
          
                </div>
            
                <button className='btnPrice'>Filter Price</button>
               
            
              </form> 
                

            : null
        }
        
        
        <button  className='btnopen' onClick={handleOpeb}>Filter </button>
      
        </div>
  )
}

export default ModalPage
