'use client';
import React from 'react'
import { signOut, useSession } from 'next-auth/react'
import AppLayout from '@/app/appLayout';

const Dashboard = () => {
  const { data: session } = useSession();

    return <AppLayout>
      <div className='bg-white text-black flex-col justify-center items-center rounded-2xl opacity-85 text-center h-80 py-10'>
        {session?.user?.email ?
          <div>
            <h1 className='text-3xl text-center my-2'>Dashboard</h1>
            <h1> HII Welcome <b>{session.user.email}</b></h1>
            <button onClick={signOut} className='px-3 py-1 rounded-md bg-red-600 mt-10'>Sign Out</button>
          </div>
          :
          <div>
            <h1 className='text-3xl text-center my-2'>Dashboard</h1>
            <p>Please signin first</p>
            <button onClick={() => window.location.href = "/auth/signin"} className='px-3 py-1 rounded-md bg-green-600 mt-10'>Go to Sign in Page</button>
          </div>}
      </div>

    </AppLayout>

  }



export default Dashboard