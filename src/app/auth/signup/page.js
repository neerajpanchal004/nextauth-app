'use client';
import AppLayout from '@/app/appLayout'
import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react'



const Page = () => {
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        password:''
      }); 
      const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({
          ...userDetails,
          [name]: value
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post('/auth/signup',{userDetails})
          if(res.verify){
            window.location.href = "/auth/signin"
          }else{
            alert("email is already existing")
            setUserDetails({
              name: '',
              email: '',
              password:''
            })
          }
        } catch (error) {
          console.log(error)
        }
        
      };
  return (
    <AppLayout>
        <div className=' rounded-2xl bg-white text-black p-8 '>
            <p className='text-center text-xl mb-2'>Welcome please signup here !</p>
            
            <form onSubmit={handleSubmit}>
                <h3>NAME</h3>
                <input type='text'value={userDetails.name} name='name' onChange={handleChange} placeholder='Enter Your Name' className='w-80 border-[1px] border-black px-3 py-1 rounded-2xl  bg-white' />

                <h3>Email</h3>
                <input type='email' value={userDetails.email} name='email' onChange={handleChange} placeholder='Enter Your Email' className='w-80 border-[1px] border-black px-3 py-1 rounded-2xl bg-white' required/>

                <h3>Password</h3>
                <input type='password' value={userDetails.password} name='password' onChange={handleChange} placeholder='Enter Your Password' className='w-80 border-[1px] border-black px-3 py-1 rounded-2xl bg-white' required/>

                <br />

                <p className=' mt-3 '>Existing user? <Link href='/auth/signin'className='text-blue-600'>SignIn</Link></p>

                <button type='submit' className='w-80 hover:bg-blue-500 bg-blue-400 px-3 py-1 rounded-2xl mt-5'>SignUP</button>

            </form>

        </div>
    </AppLayout>
  )
}

export default Page