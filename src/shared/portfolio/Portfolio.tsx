import React from 'react'
import img from '@/assets/portfolio/bed1.png'
import { PORTFOLIO_ITEMS } from './const'

const Portfolio = () => {
  return (
    <section id='Portfolio' className='h-screen'>
        <div className='bg-[#121212]'>
            <div className='py-[23px] flex  justify-start place-items-center'>
                <p className='text-[#FFFFF] text-base font-normal'>our works</p>
                <p className='pl-4 text-3xl font-bold'> // PORTFOLIO</p>
            </div>
        </div>
        <div className='flex flex-col items-center w-full mx-auto'>
           <div className='grid grid-cols-4 gap-0 pb-12 w-full'>
              {PORTFOLIO_ITEMS.map((item, id) => (
                <div key={id} className='relative group'>
                    <img className='w-full h-auto opacity-50 group-hover:opacity-30 transition duration-300' src={item.img} alt='portfolio image'/>
                    <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                        <div className='flex flex-col text-center'>
                            <p className='text-[#FFFFF] text-base font-normal'>condo // </p>
                            <p className='text-lg font-bold'>RIVERSTONE</p>
                        </div>
                    </div>
                </div>
             ))}
             </div>
            <button className='text-white text-center font-bold text-base leading-8 bg-[#121212] py-2 px-[100px]'>SEE ALL</button>
        </div>
    </section>
  )
}

export default Portfolio