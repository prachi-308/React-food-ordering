import React from 'react'

const Header = () => {
  return (
    <div className='bg-[url("/header_img.png")] bg-no-repeat bg-contain relative my-[30px] mx-auto h-[34vw]'>
        <div className=" absolute flex flex-col items-start gap-[1.5vw ] max-w-[50%] bottom-[10%] left-[6vw] animate-[fadeIn_3s] ">
            <h2 className="lg:text-[4.5vw] text-[22px] font-medium text-white">Order Your Fvourite Food Here</h2>
            <p className="text-white text-[1vw] pb-4">Choose from a diverse Menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.Our mission isto satisty your cravings and elevate your dinning experience,one delicious meal at a time.</p>
            <button className="bg-white text-gray-800 py-[1vw] px-[2.3vw]  border-none font-medium lg:text-[1vw] text-[13px] rounded-full">View Menu</button> 
        </div>
        
      
    </div>
  )
}

export default Header
