import React from 'react'
import { useContext } from 'react'
import { StoreContext } from './Context/StoreContext'
import Fooditem from './Fooditem'

function Fooddisplay({category}) {
    const {food_list}=useContext(StoreContext)
  return (
    <div id="food-display" className='mt-[30px]'>
        <h2 className ='lg:text-[2vw] text-[24px] font-[600]'>Top Dishes For You </h2>
       <div className=' grid grid-cols-[repeat(auto-fill,_minmax(260px,_1fr))] gap-[20px] gap-x-[20px] mt-[30px] '>
        {
            food_list.map((item,index)=>{
                return <Fooditem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
            })
        }
       </div>
    </div>
  )
}

export default Fooddisplay
