import React from 'react'

const Button = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='bg-gradient-to-b from-red to-deep-red text-white px-4 py-2 rounded-full font-semibold cursor-pointer flex items-center gap-2'>
        {children}
    </div>
  )
}

export default Button