import React from 'react'

const AppLayout = ({children}) => {
 
  return (
    <>
    <div>
        <img src='/img/mountain-background.jpg' className='w-full h-screen object-cover'/>
        <div className='absolute top-16 left-96 w-96  '>{children}</div>
    </div>
    </>
  )
}

export default AppLayout