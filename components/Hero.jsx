'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Arvo } from "next/font/google";
import { useTypewriter } from "react-simple-typewriter";
import { motion } from 'motion/react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
// import required modules
import { Pagination } from 'swiper/modules';

const arvoFont= Arvo ({
  subsets: ["latin"],
  weight: '400',
  variable: "--font-arvo",
});



const Hero = () => {
  const [text] =useTypewriter({
    words: ['Port Harcourt', 'Hash House Harriers','Port Harcourt Hash House Harriers']
    

  })
  return (
    <div className={`${arvoFont.variable}`}>
      {/* SECTION 1 */}
        <section id='section1' className='h-screen bg-cover  bg-center bg-no-repeat' style={{ backgroundImage: "url('/image/bg-sec1.avif')" }}>
            <div className='bg-white h-[60%] md:h-[60%] text-3xl md:px-[3rem] '>
              <h1 className="text-lg pt-[4rem] md:pt-[8rem] font-semibold text-center font-arvo">Welcome to</h1>
              <h1 className='flex items-center justify-center pt-[1rem] md:pt-[1rem] font-arvo head_text tracking-[5px] text-center'>{text}</h1>
              <p className='text-center text-base md:text-[20px] pt-[2rem] font-arvo'>We are a drinking club with a running problem.</p>
              <p className='text-center pt-[1rem] text-sm font-arvo md:text-xl'>We drink beer to save water</p>
              <p className='text-center pt-[1rem] text-base font-arvo md:text-xl flex items-center justify-center gap-2'>Join us every Friday at 5pm!
                <Image src='/image/beer1.svg' width={35} height={35} alt="beericon" className="animate-bounce"/>
              </p>
            </div>
            
            {/* modal */}
            <div className="flex items-center justify-center pt-[1rem] min-h-[40%]">
             
              <button className="btn font-arvo border border-black hover:border hover:border-black" onClick={()=>document.getElementById('my_modal_4').showModal()}>Run Information:</button>
              <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl font-arvo">
                  <h3 className="font-bold text-lg ">Hashers RU!!!</h3>
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center gap-1">
                      <Image src='/image/logo.png' width={50} height={50} alt="logo"/>
                      <h3 className="text-xs font-arvo">#NWTS</h3>
                    </div>
                    <h3 className="font-semibold">Weekly Run Information :</h3>
                    <ul className="space-y-3">
                      <li>Run No: 1005</li>
                      <li>Date: Friday 28th February, 2025</li>
                      <li>Venue: Nwanyi Enugu, GRA Phase II, Port Harcourt</li>
                      <li>Hare: PH H3Mismanagement</li>
                      <li>Rego: N1,500</li>
                      <li>Time: 5:00 pm</li>
                      <li>Rego Account: 1019116023 UBA</li>
                    </ul>
                  </div>

                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </section>

        {/* SECTION 2 */}
        <section id="section2" className="h-[20rem] font-arvo py-[3rem] px-[3rem] bg-red-50 ">
          <div className="space-y-5">
            <h3 className="text-sm md:text-lg">A community of Runners and Beer lovers</h3>
            <h3 className="text-sm md:text-3xl">Hash House Harriers</h3>
          </div>

          <div className="pt-3">
            <p className="text-sm md:text-[20px] leading-4 md:leading-6">Port Harcourt Hash House Harriers is a kennel of <br /> vibrant community that unites runners and beer lovers. <br /> We host weekly, non-competitive runs, to celebrate and <br /> promote physical fitness and friendship. Join us to  experience <br /> dynamic adventures and lasting connections ON ON!.</p>

          </div>
        </section>

        {/* SECTION 3 */}
        <div id="section3" className="px-[3rem] bg-gray-300/20 py-16 relative">
          <div>
            <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740592027/pic1_mss4ds.jpg' width={700} height={500} alt="image" className="rounded-xl"/>
          </div>

          <div className="md:absolute top-[5rem] pr-[16px] pb-5 right-[8rem] font-arvo h-[35%] md:bg-red-100/80 w-fit rounded-lg">
            <div className="right-[24rem] h-[100%] bg-gray-50/90  px-[1rem] py-10 rounded-lg">
              <h1 className="font-bold text-2xl ">Hiking with your running shoes.</h1>
              <p className="pt-3 leading-5">Hiking with your running shoes lacks proper ankle support, <br /> compromises stability and durability compared to proper hiking boots <br /> which provide better grip and stability. Confirm from DGM Bigger  <br /> Twerk for more information else OTILO!</p>
            </div>

            <div className="flex md:block px-[1rem]">
              <Image src='/image/shoe 2.png' width={100} height={100} alt="image" className="md:absolute top-[12rem] right-[8rem]"/>

              <Image src='/image/shoe.png' width={100} height={100} alt="image" className="md:absolute top-[12rem] right-[2rem]"/>
            </div>

          </div>


        </div>

        {/* Section 4 Swiper Js */}
        <div id="section4" className="md:px-[3rem] px-[1rem] bg-gray-300/20 pb-[2rem]">
        
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            }}
            navigation={true}
            pagination={{
            clickable: true,
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper">
              
              <SwiperSlide>
                <div className='h-48 w-full overflow-hidden'>
                    <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740599057/IMG-20250127-WA0090_byqiol.jpg' width={100} height={100}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                  </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='h-48 w-full overflow-hidden'>
                    <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740599093/IMG-20250226-WA0181_bdgrka.jpg' width={100} height={100}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                  </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='h-48 w-full overflow-hidden'>
                    <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740599103/IMG-20250226-WA0185_aztgr7.jpg' width={100} height={100}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                  </div>
              </SwiperSlide>


              <SwiperSlide>
                <div className='h-48 w-full overflow-hidden'>
                    <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740599111/IMG-20250226-WA0183_abmju2.jpg' width={100} height={100}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                  </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='h-48 w-full overflow-hidden'>
                    <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740599125/IMG-20250226-WA0187_ontlcb.jpg' width={100} height={100}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                  </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='h-48 w-full overflow-hidden'>
                    <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740599130/IMG-20250226-WA0188_llnkam.jpg' width={100} height={100}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                  </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='h-48 w-full overflow-hidden'>
                    <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740599144/IMG-20250226-WA0190_kl0scm.jpg' width={100} height={100}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                  </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='h-48 w-full overflow-hidden'>
                    <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740599150/IMG-20250226-WA0191_uejhnr.jpg' width={100} height={100}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                  </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='h-48 w-full overflow-hidden'>
                    <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740599182/IMG-20250226-WA0195_inzdiw.jpg' width={100} height={100}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                  </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='h-48 w-full overflow-hidden'>
                    <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740599136/IMG-20250226-WA0189_q2ns0z.jpg' width={100} height={100}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                  </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='h-48 w-full overflow-hidden'>
                    <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740599172/IMG-20250226-WA0193_aae8ow.jpg' width={100} height={100}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                  </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='h-48 w-full overflow-hidden'>
                    <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740599248/IMG-20250226-WA0197_o9oz9f.jpg' width={100} height={100}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                  </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='h-48 w-full overflow-hidden'>
                    <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740599260/IMG-20250226-WA0199_altyic.jpg' width={100} height={100}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                  </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='h-48 w-full overflow-hidden'>
                    <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740599253/IMG-20250226-WA0198_zxstru.jpg' width={100} height={100}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                  </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='h-48 w-full overflow-hidden'>
                    <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740599268/IMG-20250226-WA0200_iiopxm.jpg' width={100} height={100}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                  </div>
              </SwiperSlide>



          </Swiper>
                

        </div>
          
          
        {/* Section 5 SOFT BABY */}
        <div id="section5" className="bg-black text-gray-200/50 h-[40%] lg:flex font-arvo pb-12 relative">
          <div>
            <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740602752/DSC_5481_zen0c1.jpg' width={700} height={100} alt="image"/>
          </div>
          
          <div className="flex flex-col items-center justify-center mx-auto pt-5 relative">
            <p className="leading-8 pb-[1.5rem] text-sm md:text-xl px-[1rem]">“Hashing is a life style and cold beer heals all wound. <br /> We hash to promote physical fitness among hashers, <br /> We hash to get rid of weekend hangovers, <br /> We hash to acquire a good thirst and to satisfy it with beer and <br /> To persuade the older hashers they are not as old as they feel.”
            </p>

            <div className="pt-5 flex gap-5">
              <motion.div
                initial={{
                  opacity:0,
              }}
              animate={{
                  scale:[1,2,2,3,1],
                  opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
                  borderRadius: ['20%', '20%', '50%', '80%', '20%'],
              }}
      
              transition={{
                  duration:2.5,
              }}
              className='relative flex justify-center items-center mt'>
                <div className='absolute border border-blue-400/50 rounded-full h-[150px] w-[150px] mt-4 animate-ping'/>

                <div className='absolute border border-blue-200/50 rounded-full h-[250px] w-[250px] mt-4'/>

                <div className='absolute border border-[#F7AB0A]/50 rounded-full h-[350px] w-[350px] mt-4 animate-ping'/>

                {/* <div className='rounded-full border border-[#F7AB0A]/50 opacity-20 h-[500px] w-[500px] absolute mt-52 animate-pulse'/> */}
                <Image src='/image/softb.jpg' width={100} height={10} alt="profile image" className="ring ring-blue-400 rounded-full" />
              </motion.div>
              
              
              <ul className="flex flex-col items-center justify-center text-white">
                <li className="font-semibold">SOFT BABY</li>
                <li className="text-sm block">#PH H<sup>3</sup></li>
              </ul>
            </div>
          </div>

            {/*tablet screen hidden  */}
          <div className="absolute top-[20rem] md:block hidden right-[2rem]">
            <Image src='/image/w-can.png' width={100} height={100} alt="image of water can"/>
          </div>
            
          {/* small screen */}
          <div className="absolute top-[37rem] md:hidden right-[1rem]">
            <Image src='/image/w-can.png' width={30} height={30} alt="image of water can"/>
          </div>
          
        </div>

        {/* SECTION 6  */}
        <div id='section6' className=' h-screen bg-cover bg-center bg-no-repeat' style={{ backgroundImage: "url('/image/lucas1.jpg')" }}>
          <div className="">
            <div className="bg-black/40 md:pt-6 md:px-[3rem] ">
              <Image src='/image/save.png' width={300} height={300} alt="image" className=" "/>
            </div>
            <div className="grid grid-cols-2 md:grid md:grid-cols-3 pt-1 md:pt-24 bg-black/40 md:gap-16 md:px-[3rem]">
              {/* 1 */}
              <div className="flex gap-1 md:gap-3 w-fit ">
                <div><Image src='/image/ishoe.png' width={100} height={100} alt="hash gear" className=""/></div>
                <div className="text-gray-100/90 font-arvo ">
                  <h2 className="md:text-2xl font-bold text-xs">MR. BAD LEG</h2>
                  <p className="text-xs md:text-lg">As a hasher, your hash gear is your identity. <br /> Make sure you always come with it.</p>
                </div>
              </div>

              {/* 2 */}
              <div className="flex gap-1 md:gap-3 w-fit">
                <div><Image src='/image/isexz.png' width={200} height={200} alt="hash gear" className=""/></div>
                <div className="text-gray-100/90 font-arvo">
                  <h2 className="md:text-2xl font-bold text-xs">UNSURE</h2>
                  <p className="text-xs md:text-lg">It is not the size of the dog in the fight but rather the size of the fight in the DOG.</p>
                </div>
              </div>

              {/* 3 */}
              <div className="flex gap-1 md:gap-3 w-fit">
                <div><Image src='/image/ionon.png' width={300} height={300} alt="hash gear" className=""/></div>
                <div className="text-gray-100/90 font-arvo">
                  <h2 className="md:text-2xl font-bold text-xs">AWAY RUNS</h2>
                  <p className="text-xs md:text-lg">The Hash is a non-competitive club that brings together runners and beer lovers for a refreshing reward at the end.</p>
                </div>
              </div>

              {/* 4 */}
              <div className="flex gap-1 md:gap-3 w-fit">
                <div><Image src='/image/ican.png' width={100} height={100} alt="hash gear" className=""/></div>
                <div className="text-gray-100/90 font-arvo">
                  <h2 className="md:text-2xl font-bold text-xs">BEER MERCHANT</h2>
                  <p className="text-xs md:text-lg">We drink Lager to save water.</p>
                </div>
              </div>

              {/* 5 */}
              <div className="flex gap-1 md:gap-3 w-fit">
                <div><Image src='/image/iwork.png' width={300} height={300} alt="hash gear" className=""/></div>
                <div className="text-gray-100/90 font-arvo">
                  <h2 className="md:text-2xl font-bold text-xs">I AM NOT AN HASHER</h2>
                  <p className="text-xs md:text-lg">Every hasher is unique. We are fun-loving people who come together for the thrill of a great trail and the joy of a cold beer </p>
                </div>
              </div>

               {/* 6 */}
               <div className="flex gap-1 md:gap-3 w-fit">
                <div><Image src='/image/iwatch.png' width={100} height={100} alt="hash gear" className=""/></div>
                <div className="text-gray-100/90 font-arvo">
                  <h2 className="md:text-2xl font-bold text-xs">REGO</h2>
                  <p className="text-xs md:text-lg">Rego is a hasher's key. No Rego, No Hashing.</p>
                </div>
              </div>

              











            </div>
          </div>
        <div className="h-screen bg-black/40"/>
        
        









        </div>

        {/* SECTION 7 LEADERS DASHBOARD */}
        <div id="section7" className="bg-white h-screen w-full">
          

        </div>
      
    </div>
  )
}

export default Hero
