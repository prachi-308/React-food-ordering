import React, { useState } from 'react'
import { assets } from '../assets/assets'


const Navbar = () => {
    const[menu,setMenu]=useState("home")
  return (
    <div className="flex items-center justify-between py-[20px] px-[0px]">
        <img src={assets.logo} alt=""   className="h-auto w-[150px]"/>
                <ul  className="flex list-none gap-[20px] text-[#49557e] text-[18px]">
                <li  onClick={()=>setMenu("home")} className={menu==="home"?"active":""} ><a className='cursor-pointer hover:text-red-500'>HOME</a></li>
                <li  onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}><a className='cursor-pointer hover:text-red-500'>MENU</a></li>
                <li  onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}><a className='cursor-pointer hover:text-red-500'>MOBILE-APP</a></li>
                <li  onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}><a className='cursor-pointer hover:text-red-500'>CONTACT US</a></li>
            </ul>
        
            <div className="flex items-center gap-[40px]">
            
            <img src={assets.search_icon} className="relative" alt="" />
            <div>
                 <img src={assets.basket_icon} alt="" />
                 <div className="absolute text-center bg-red-600 top-4 left-[81.2%] rounded-2xl min-h-6 min-w-6"></div>
            </div>
           
           
            <button className='py-[10px] rounded-xl bg-red-600 text-white px-[30px] cursor-pointer text-[16px] border-solid border-[1px] border-[tomato] hover:bg-red-900 '>Sign In</button>
          </div>
        </div>
      

  )
}

export default Navbar
