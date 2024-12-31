import React, { useState } from 'react'

const Login = () => {

 const [CurrentState,setCurrentState] = useState('Login');

  const onsubmitHandler = async(event) =>{
    event.preventDefault();

  }

  return (

    <form action="" onSubmit={onsubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14  gap-4 text-gray-800'>
      <div className='inline -flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{CurrentState}</p>
        <hr  className='border-none h[1.5 px] w-8 bg-gray-800'/>
      </div>
      {CurrentState === 'Login' ? '': <input  className='w-full px-3 py-2 border border-gray-800'type="text" name="" id="" placeholder='Name'  required/>}
      
      <input  className='w-full px-3 py-2 border border-gray-800'type="email" name="" id="" placeholder='Email' required />
      <input  className='w-full px-3 py-2 border border-gray-800'type="password" name="" id="" placeholder='Password'  required/>
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'> Forget Your Password?</p>
        {
          CurrentState === 'Login'
          ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>Create Account</p>
          : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
        }
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>{CurrentState === 'Login' ? 'Sign In': 'Sign Up'}</button>
    </form>
  )
}

export default Login
