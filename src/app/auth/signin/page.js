'use client';
import AppLayout from '@/app/appLayout'
import Link from 'next/link'
import React,{useState} from 'react'
import {signIn} from 'next-auth/react'


const page = () => {
  const [loginDetails, setLoginDetails] = useState({
    email:'',
    password:''
  })
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value
    });
  };
   

  const signin_with_credentials = async(e) => {
    e.preventDefault()
    const result =   await signIn('credentials',{...loginDetails,redirect:false})
    if(result.ok){
      window.location.href = '/';
    }else{
      if(loginDetails.email==""){
        alert("Please enter your valid details")
        
      }else {
      alert('Invalid Credentials')
      setLoginDetails({
        email:'',
        password:''
      })
    }
      
    }

    

  
   
  }
  const signin_with_google = async ()=>{
    await signIn('google',{callbackUrl:'http://localhost:3000/',redirect:true})
  }

  const signin_with_github = async ()=>{
    await signIn('github',{callbackUrl:'http://localhost:3000/',redirect:true})
  }
  return (
    <AppLayout>
    <div className=' rounded-2xl bg-white text-black p-8 '>
        <p className='text-center text-xl mb-2'>Welcome please signin here !</p>
        
        <form >
           
            <h3>Email</h3>
            <input type='email' value={loginDetails.email} required={true} name='email' onChange={handleChange} placeholder='Enter Your Email' className=' w-64 sm:w-80 border-[1px] border-black px-3 py-1 rounded-2xl bg-white' required/>

            <h3>Password</h3>
            <input type='password' value={loginDetails.password} required={true} name='password' onChange={handleChange} placeholder='Enter Your Password' className='w-64 sm:w-80 border-[1px] border-black px-3 py-1 rounded-2xl bg-white' required/>

            <br />

            <p className=' mt-3 '>Create an account? <Link href='/auth/signup'className='text-blue-600'>SignUp</Link></p>

            <button type='submit' className='w-64 sm:w-80 hover:bg-red-600 bg-red-500  text-white px-3 py-2 rounded-2xl mt-5'onClick={signin_with_credentials}>Signin with credentials</button>

        </form>
        <h1 className='text-center mt-3'>OR</h1>

        <button type='submit' className='w-64 sm:w-80 hover:bg-green-700 bg-green-600  text-white px-3 py-2 rounded-2xl mt-5'onClick={signin_with_google}>Signin with google</button>
        <button type='submit' className='w-64 sm:w-80 hover:bg-slate-900 bg-slate-800 text-white px-3 py-2 rounded-2xl mt-5'onClick={signin_with_github}>Signin with github</button>


    </div>
</AppLayout>
   
  )
}

export default page