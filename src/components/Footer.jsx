import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div id="footer" className='text-[#d9d9d9] bg-[#2a2a2a] flex flex-col items-center gap-[20px] py-[20px] px-[8vw] pt-[80px] '>
      <div className='w-[100%] grid grid-cols-[2fr_1fr_1fr] gap-[80px]'>
        <div>
            <h1 className='font-[700] text-4xl mb-3'>FOODIES CORNER  </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eaque dolorem sequi iusto ratione placeat molestias, excepturi recusandae ut voluptate.</p>
            <div className='flex gap-3 mt-3'>
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
            </div>
        </div>
        <div>
            <h2 className='font-[400] text-2xl mb-3 '>Foodies</h2>
            <ul >
                <li  className='mb-2'>Home</li>
                <li className='mb-2'> About Us</li>
                <li className='mb-2'> Delivery </li>
                <li className='mb-2'> Privacy Policy</li>
            </ul>
        </div>
        <div>
            <h2 className='font-[500] text-3xl mb-4'>GET IN TOUCH </h2>
            <ul>
                <li className='mb-2' >+91-8375025075</li>
                <li className='mb-2' >contact@foodie.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p>Copyright 2024 &copy; Foodies Corner -All Rights Reserved</p>
    </div>
  )
}

export default Footer
