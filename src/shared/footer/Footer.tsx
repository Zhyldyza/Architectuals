import React from 'react'
import { Link } from 'react-scroll';
import { FOOTER_ITEMS } from './const'

const Footer = () => {
 
  return (
    <div className='w-full bg-[#121212]'>
        <nav className='w-3/5 mx-auto flex justify-between items-center pt-[70px] '>
            {FOOTER_ITEMS.map((item)=>(
              <ul key={item.id} className="text-lg font-normal">
                <li className="pb-4 cursor-pointer">
                  <Link to="About" smooth={true} duration={200}>
                   {item.icon && <img src={item.icon} alt="icon" />}
                  </Link>
                </li>
                <li className="pb-4 cursor-pointer hover:text-[#B5B5B5]">
                   <Link to="Header" smooth={true} duration={200}>
                      {item.value1}
                  </Link>
                </li>
                <li className='pb-4 cursor-pointer hover:text-[#B5B5B5]'>
                  <Link to="Portfolio" smooth={true} duration={200}>
                    {item.value2}
                  </Link>
                </li>
                 <li className='cursor-pointer hover:text-[#B5B5B5]'>
                  <Link to="News" smooth={true} duration={200}>
                    {item.value3}
                  </Link>
                </li>
              </ul>
            ))}
        </nav>
        <p className="text-center text-[#999999] text-lg font-normal py-[59px]">2020 © LIKE I LIKE — All rights reserved</p>
    </div>
  )
}

export default Footer