import React from 'react';
import { FiInstagram } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
const HeaderTop = () => {
  return (

    // Top block with border hidden on small screens
    <div className="border-b border-gray-200 hidden sm:block">

      {/* Container with indents and flex distribution */}
      <div className="container py-4 flex justify-between items-center">

        {/* Icon block, hidden on small screens */}
        <div className="hidden lg:flex gap-1">
          <div className="header_top_icon_wrapper">
          <FiInstagram />
          </div>

          <div className="header_top_icon_wrapper">
          <CiLinkedin />
          </div>

          <div className="header_top_icon_wrapper">
          <FaGithub />
          </div>
        </div>


        <div className='text-gray-500 text-[12px] text-center'>
            <b>Free Shipping</b> <br/>
            THIS WEEK OVER -55$
        </div>

        <div className='flex gap-4'>
            <select className='text-gray-500 text-[12px] w-[70px]'
            name='currency'
            id='currency'>
                <option value="USD $">USD $ </option>
                <option value="EUR €">EUR € </option>
                </select>

                <select 
                className='text-gray-500 text-[12px] w-[80px]'
                name='language'
                id='language'>
                    <option value="English">English</option>
                    <option value="Russian">Russian</option>
                    <option value="Chinese">Chinese</option>
                </select>

        </div>



      </div>
    </div>
  );
};

export default HeaderTop;
