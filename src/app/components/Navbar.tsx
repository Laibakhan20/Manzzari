import { Heart, Search, ShoppingCart, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'



const Navbar = () => {
  return (
    <div className="bg-mybrown flex items-center justify-between w-full h-[135.01] p-4 md:h-[100px] mx-auto">
        {/*logo*/}
        <div className="flex items-center justify-center p-5">
            <Image
            src={"/MANZZARI.png"}
            alt="manzzari"
            width={200}
            height={87}
            className=" sm:h-[70px] sm:w-[150px] md:h-[94px] md:w-[438px] py-2 pt-4 pb-4 object-contain object-center"
            />
        </div>

        {/*search bar*/}
        <div className="relative  flex justify-center mx-2 my-2 md:my-0 md:mx-4 max-w-xs sm:max-w-md md:max-w-lg ">
          <input
          type="search"
          placeholder="Search for Gold Jwellery, Diamond Jwellery and more..."
          className="font-mono w-full h-[56.24px] pr-12 px-4 border border-mygray bg-mylightgray rounded-lg focus:outline-none sm:max-w-md md:max-w-lg xl:w-[769.89px] xl:h-[56.24px]"
          />
          <Search className=" absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl"/>          
         </div>

         {/*icons*/}
         <div className="flex items-center justify-center gap-5 md:space-x-4 p-5 mr-5">
         <Heart className="size-[30px] text-white text-lg md:text-2xl"/>
         <User className="size-[30px] text-white text-lg md:text-2xl"/>
         <ShoppingCart className="text-white size-[30px] text-lg md:text-2xl"/>
         </div>



    </div>
  )
}

export default Navbar






{/* <label className="block">
<span className="block text-sm font-medium text-slate-700">Social Security Number</span>
<input className="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"/>
<p className="mt-2 opacity-10 contrast-more:opacity-100 text-slate-600 text-sm">
  We need this to steal your identity.
</p>
</label> */}