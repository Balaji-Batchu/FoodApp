import React from "react";
import Bike from '../../delivery.jpg'
//import i1 from '../../i1.png'
import heroBg from '../../heroBg.png'
import {heroData as data} from '../Utils/data'
import {motion} from 'framer-motion'


export default function HomeComponent(){
    return(
        <section className="grid grid-cols-1 my-2 rounded-lg md:grid-cols-2 gap-4 w-full " id="home">
            <div className="py-1 px-4 flex-1 flex flex-col items-start md:items-start justify-center rounded-lg gap-4 pt-0">
                <div className="flex justify-center items-center bg-orange-100 px-2 py-1 rounded-lg ">
                    <p className="font-serif font-bold text-orange-500 mr-2">Bike Delivery</p>
                    <div className="h-8 w-8 overflow-hidden drop-shadow-xl rounded-full ">
                        <img src={Bike} className="w-full h-full object-contain"/>
                    </div>
                </div>
                <p className="text-[2.5rem] lg:text-[4rem] font-bold tracking-wide text-gray-800">The Fastest Delivery in <span className="text-orange-600 text-[3rem] lg:text-[4.5rem]">Your City</span></p>
                <p className="text-base text-gray-600 text-center md:text-left md:w-[87%]">Food delivery apps have become increasingly popular over the past few years, providing convenience and ease of access to a wide variety of cuisines. The hero section of a food delivery app is the first thing a user sees when they open the app, and it is designed to grab their attention and encourage them to start browsing.</p>
                <motion.button whileTap={{scale : 0.9}} className="bg-gradient-to-br from-orange-400 to-orange-500 px-2 py-1 rounded-lg hover:shadow-lg text-white w-full transition-all duration-100 ease-in-out md:w-32 font-semibold">Order now</motion.button>
            </div>

            <div className="py-2 flex-1 flex items-start relative">
                <img src={heroBg} className="md:h-full sm:pt-12 lg:w-auto lg:h-[600px] lg:ml-64 ml-2 pr-8" />
                <div className="w-full h-full flex top-0 left-0 justify-center items-center px-24 lg:pr-16 absolute md:pt-4 lg:pt-8 lg:gap-4 md:gap-2 flex-wrap sm:overflow-scroll overflow-auto" >
                {data && data.map((single)=>{
                    return (
                            <div className="lg:w-[190px] p-4 bg-white bg-opacity-40 background-blur-md rounded-2xl flex flex-col items-center justify-center mt-4 drop-shadow-lg hover:drop-shadow-2xl hover:cursor-pointer" key={single.id}>
                                <img src={single.imagesrc} className="w-20 lg:w-40 lg:-mt-20" alt={single.name} />
                                <p className="text-base lg:text-xl font-semibold text-gray-800 lg:mt-3 mt-2">{single.name}</p>
                                <p className="text-[13px] lg:text-sm text-gray-500 font-semibold text-center my-1 lg:my-3">{single.flavour}</p>
                                <p className="text-md font-semibold text-black-700"><span className="text-red-500 text-sm font-semibold">$ </span>{single.price}</p>
                            </div>
                    )
                })}
                </div>
            </div>
        </section>
    )
}