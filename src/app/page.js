'use client';
import React from 'react'
import { SessionProvider,session } from 'next-auth/react'
import Dashboard from './auth/dashboard';

const page = () => {
 
  return (
    <SessionProvider session={session}>
        <Dashboard/>

    </SessionProvider>
    
  )
}

export default page