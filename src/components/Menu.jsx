import React from 'react'
import {menu_list} from '../assets/assets'
import '../index.css'

function Menu({category,setCategory}) {
  return (
    <div className='flex flex-col gap-[20px] '>
        <h1 className="text-[#262626]  text-4xl font-[700]">Explore our Menu</h1>
        <p className="max-w-[60%] para  ">Choose ur food from the delectable list of array</p>
        <div className=" flex justify-evenly items-center gap-[30px] text-center my-[20px] mx-[0px] xyz ">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='xx'>
                        <img className={category===item.menu_name?"active":""}    src={item.menu_image} alt="" />
                        <p className='mt-[10px] text-[#747474] lg:text-[1.4vw] text-[16px] cursor-pointer'>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
      <hr className='border-3  my-[10px] mx-[0px] border-orange-100 ' />
    </div>
  )
}

export default Menu
