import React from 'react';
import './style/login.css'
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';

const LoginPage = () => {
  const createToken=useAuth()
  const {handleSubmit,register,reset}=useForm();

  const submit= data=>{
    const url='https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
    createToken(url,data)
    reset({
      email:'',
      password:'',
    })

  }
 
  return (
    <section className='login_container'>
       <form onSubmit={handleSubmit(submit)} className='login_form'>
        <h3 className=''>Welcome! Enter your email and password to continue</h3>
          <div>
          <label htmlFor='email'>Email</label>
          <input {...register('email')} id='email'name='email' type='text'/>
          </div>
          <div>
          <label htmlFor='password'>Password</label>
          <input {...register('password')} type='password'/>
          </div>
         
          <div>
          <button>Login</button>
          </div>
          <div className='switch-form'>
            Don't have an account?
          <a href='#/register' type='button' className='btn'>Sign up</a>
          </div>
      
      </form>
     <footer>
      <div className='login_footer'>@ Academlo 2024</div>
     </footer>
      
    </section>
  )
}

export default LoginPage
