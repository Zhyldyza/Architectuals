import React from 'react'
import pix from '@/assets/new.png'
import { NEWS_ITEMS } from './const'
const News = () => {
  return (
    <section id="News" className='pt-9 h-screen w-full'>
            <div className='bg-[#121212] py-[23px] w-full flex  justify-start place-items-center'>
                <h1 className='text-[#FFFFF] text-base font-normal'>what's new</h1>
                <h1 className='pl-4 text-3xl font-bold'> // NEWS</h1>
            </div>
            <div className='flex justify-center pt-[85px] '>
                {NEWS_ITEMS.map((item)=>(
                 <div className='flex flex-col max-w-[20%] px-5'>
                  <img className='max-h-[]' src={item.img}/>
                  <h1 className='text-center text-base font-bold leding-8 pt-10'>{item.title}</h1>
                  <p className='pt-6 pb-9'>{item.text}</p>
                  <button className='bg-[#121212] py-2 text-base font-bold'>{item.btext}</button>
                </div>
            ))}
            </div>
    </section>
  )
}

export default News