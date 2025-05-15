import React from 'react';
import Image from 'next/image';

interface PropsType {
  img: string;
  title: string;
  mainTitle: string;
  price: string;
}

const Slide: React.FC<PropsType> = ({ img, title, mainTitle, price }) => {
  return (

    /* Image (background) */
    <div className="relative w-full max-w-[1000px] h-[500px] 
    rounded-xl overflow-hidden mx-auto">
      <Image
        className="w-full h-full object-cover"
        src={img}
        alt="banner"
        width={2000}
        height={2000}
        priority
      />

      {/* Text block on top of an image */}
      <div
        className="absolute left-[30px] md:left-[30px] top-[50%] -translate-y-[50%] 
        space-y-2 lg:space-y-4 max-w-[250px] sm:max-w-[350px] bg-[#fffffa2] 
        sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none"
      >
        <h3 className="text-black text-[24px] lg:text-[28px]">{title}</h3>
        <h2 className="text-white text-[26px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2]">
          {mainTitle}
        </h2>
        <h3 className="text-[24px] text-gray-500">
          starting at{' '}
          <b className="text-[20px] md:text-[24px] lg:text-[30px]">{price}</b>.00
        </h3>
        <div className="bg-accent text-white text-[14px] md:text-[16px] p-2 px-2 rounded-lg
         inline-block cursor-pointer hover:bg-blackish">
          Shop Now
        </div>
      </div>
    </div>
  );
};

export default Slide;
