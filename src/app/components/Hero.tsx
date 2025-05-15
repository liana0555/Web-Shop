"use client" //for the component to run in the browser (for the react-slick slider)

import React from 'react'
import Slider from "react-slick"
import Slide from "./Slide"

const Hero = () => {
    var settings = {
    dots: true,
    infinite: true,
    slidesToShow:1,
    autoplay: true,
    pauseOnHover: false,
    };

    const slideData = [
    {
        id:0,
        img: "/banner-1.jpg",
        title: "Trending Item",
        mainTitle: "WOMANS'S LATEST FASHION SALE",
        price: "20$",
    },
    {
        id:1,
        img: "/banner-2.jpg",
        title: "Trending Accessories",
        mainTitle: "MODERN SUNGLASSES",
        price: "15$",
    },
    {
        id:2,
        img: "/banner-3.jpg",
        title: "",
        mainTitle: "NEW FASHION SUMMER SALE",
        price: "30$",
    },
    ];

    return <div> 
        <div className='container pt-8 lg:pt-0'>
            <Slider{...settings}>
                {slideData.map((item) => (
                    <Slide 
                    key={item.id}
                    img={item.img}
                    title ={item.title}
                    mainTitle={item.mainTitle}
                    price={item.price}
                    />
                    ))}
            </Slider>

        </div>
    </div>
  
};




export default Hero
