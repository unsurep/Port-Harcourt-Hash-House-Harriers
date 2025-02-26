'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Arvo } from "next/font/google";
import { useTypewriter } from "react-simple-typewriter";

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
              <h1 className="text-base pt-[4rem] md:pt-[8rem] font-semibold text-center font-arvo">Welcome to</h1>
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
        <div className="px-[3rem] bg-gray-300/20 py-16 relative">
          <div>
            <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740592027/pic1_mss4ds.jpg' width={700} height={500} alt="image" className="rounded-xl"/>
          </div>

          <div className="md:absolute top-[5rem] pr-[16px] pb-5 right-[8rem] font-arvo h-[35%] md:bg-red-100/80 w-fit rounded-lg">
            <div className="right-[24rem] h-[100%] bg-gray-50/90  px-[1rem] py-10 rounded-lg">
              <h1 className="font-bold text-2xl ">Hiking with your running shoes.</h1>
              <p className="pt-3 leading-5">Hiking with your running shoes lacks proper ankle support, <br /> compromises stability and durability.  compared to proper hiking boots <br /> which provide better grip and stability. Confirm from DGM Bigger  <br /> Twerk for more information else OTILO!</p>
            </div>

            <div className="flex md:block px-[1rem]">
              <Image src='/image/shoe 2.png' width={100} height={100} alt="image" className="md:absolute top-[12rem] right-[8rem]"/>

              <Image src='/image/shoe.png' width={100} height={100} alt="image" className="md:absolute top-[12rem] right-[2rem]"/>
            </div>

          </div>


        </div>
      
    </div>
  )
}

export default Hero
