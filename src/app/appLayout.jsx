import React from 'react'

const AppLayout = ({children}) => {
 
  return (
    <>
    <div>
        <img src='/img/mountain-background.jpg' className='w-full h-screen object-cover'/>
        <div className='absolute top-8  lg:top-16 sm:left-48 lg:left-96 w-80 sm:w-96  '>{children}</div>
    </div>
    </>
  )
}

export default AppLayout