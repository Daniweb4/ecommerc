import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth';
import './style/register.css'
import { Link } from 'react-router-dom';


const RegisterPage = () => {
  const createUser = useAuth();
  const {handleSubmit,register,reset}=useForm();

  const submit = data => {
    const url='https://e-commerce-api-v2.academlo.tech/api/v1/users';
    createUser(url,data);
    reset({
      email:"",
      firstName:"",
      lastName:"",
      password:"",
      phone:"",
    });

  }
  
  return (
    <section className='register_containerr'>
      <form onSubmit={handleSubmit(submit)}>
        <h3 className='register'>Sign Up</h3>
        <div>
          <label htmlFor='firstName'>FirstName</label>
          <input required {...register('firstName')} if='firstName' name='firstName' type='text'/>  
        </div>
          <div>
          <label htmlFor='lastName'>LastName</label>
          <input required {...register('lastName')} id='lastName' name='lastName' type='text'/>
          </div>
          <div>
          <label htmlFor='email'>Email</label>
          <input required {...register('email')} id='email'name='email' type='text'/>
          </div>
          <div>
          <label htmlFor='password'>Password</label>
          <input required {...register('password')} type='password'/>
          </div>
          <div>
          <label htmlFor='phone'>Phone</label>
          <input min={10} {...register('phone')} id='phone' name='phone' type='number'/>
          </div>
          <div>
          <button>Sign Up</button>
          </div>
          <div className='switch-register'>
            Don't have an account?
          <Link to='/login' className='btnregister' type='button' >Log in</Link>
          </div>
      
      </form>
      <footer>
      <div className='register_footer'>@ Academlo 2024</div>
      </footer>
      
    </section>
  )
}

export default RegisterPage
