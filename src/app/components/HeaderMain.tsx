import React from 'react';
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { BsBagCheck, BsSearch } from "react-icons/bs"; // Исправил иконку поиска

const HeaderMain = () => {
  return (
    <div className="border-b border-gray-200 py-6">
      <div className="max-w-[1200px] mx-auto px-4 flex justify-between items-center">
        
   
        <div className="font-bold text-4xl text-black">Logo</div>

        
        <div className="relative w-full max-w-[500px] flex items-center">
          <input
            className="border-gray-200 border p-2 pl-4 pr-10 rounded-lg w-full"
            type="text"
            placeholder="Enter any product name..."
          />
          <BsSearch className="absolute right-3 text-gray-400 cursor-pointer" size={20} />
        </div>


        <div className="hidden lg:flex gap-6 text-gray-500 text-[30px] items-center">
          <FaRegUser />

          {/* Heart */}
          <div className="relative">
            <FaRegHeart />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] 
              text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>

          {/* Bag */}
          <div className="relative">
            <BsBagCheck />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] 
              text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              5
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
