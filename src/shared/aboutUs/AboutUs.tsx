import React from 'react'
import logo from '@/assets/logoIcon.png'

const AboutUs = () => {
return (
  <section id='About'className='w-full h-screen'>
    <div className='bg-[#121212]'>
      <div className='py-[23px] flex  justify-start place-items-center'>
        <p className='text-[#FFFFF] text-base font-normal'>our story</p>
        <p className='pl-4 text-3xl font-bold'> // ABOUT US</p>
      </div>
    </div>
    <div className='w-full mx-auto flex'>
     <nav className="w-4/5 h-screen fixed top-0 left-0 flex flex-col justify-center items-end p-4 text-white ">
       <a href="#About" className="py-4 hover:underline cursor-pointer hover:text-xl">About us</a>
       <a href="#Portfolio" className="py-4 hover:underline cursor-pointer">Portfolio</a>
       <a href="#Services" className="py-4 hover:underline cursor-pointer">Services</a>
       <a href="#Contact-us" className="py-4 hover:underline cursor-pointer">Contact us</a>
      <a href="#News" className="py-4 hover:underline cursor-pointer">News</a>
    </nav>
    <div className='pt-[116px] pb-[85px]'>
      <img src={logo} alt='logo' className='' />
      <p className='py-20 w-1/3'>
        LIKE I LIKE — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus ornare ex, nec euismod neque blandit eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed lobortis neque, a commodo nunc. Maecenas at rutrum justo. Ut ac leo neque.
      </p>
    </div>
    </div>
  </section>
);
}

export default AboutUs