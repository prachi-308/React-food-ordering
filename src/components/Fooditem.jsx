import React, { useState } from 'react'
import { assets } from '../assets/assets'

function Fooditem({id,name,price,description,image}) {
const [itemCount ,setItemCount]=useState(0)

  return (
    <div className='w-[100%] m-auto rounded-[15px] shadow-custom p-4 duration-[0.2s] animate-[fadeIn_3s] '>
      <div className='relative '>
        <img src={image} className='w-[100% rounded-custom-radius] ' alt="" />
        {
            !itemCount ? <img className='w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-[50%] ' onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_white} alt=""/>:<div className='absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] rounded-[50px] bg-white '> 
            <img onClick={()=>setItemCount(prev=>prev-1)} src={assets.remove_icon_red}  className="w-[30px]" alt="" />
            <p>{itemCount}</p>
            <img onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_green}  className="w-[30px]" alt="" />
            </div>
        }
      </div>
      <div className='pt-[20px]'>
        <div className='flex justify-between items-center mx-[1px] mb-[10px] '>
            <p className='mr-5 text-[20px] font-medium'>{name}</p>
            <img  className='w-[70px]' src={assets.rating_starts} alt="" />
        </div>
        <p className='tet-[#676767] text-[12px]'>{description}</p>
        <p className=' text-[tomato] text-[22px] font-[500] my-[10px] mx-[0px] '> ${price}</p>
      </div>
    </div>
  )
}

export default Fooditem
