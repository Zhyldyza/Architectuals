import React from 'react'
import background from '@/assets/bg-bg.jpg'


const Header = () => {
  return (
    <div className="bg-[url('/src/assets/headerBg.png')] h-screen">
        <picture className='bg-cover w-full h-[10px]'>
            <img src={background} alt="background" className='w-screen h-screen object-cover'/>
        </picture>
    </div>
  )
}

export default Header