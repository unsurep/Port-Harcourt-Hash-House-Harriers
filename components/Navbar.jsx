'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Delius } from "next/font/google";
import { IoMdMenu } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";

const deliusFont = Delius({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-delius'
});


const Navbar=()=>{

    return (
        <div className={`${deliusFont.variable}`}>
            {/* Desktop view */}
            <nav className="lg:flex items-center justify-between px-[3rem] py-3 font-delius shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] fixed z-50  w-full ring ring-red-200 hidden bg-white text-[20px] ">
                <Link href={'/'}>
                    <div className="flex items-center gap-3">
                        <Image src='/image/logo.png' width={60} height={60} alt="logo"/>
                        <h3>Port Harcourt Hash House Harriers
                            <span className="block text-xs font-bold">#NWTS 
                                {/* <audio src="" type="audio/mpeg" className="cursor-pointer bg-orange-400" controls></audio> */}
                            </span>
                        </h3>
                    </div>
                </Link>

                <ul className="flex items-center gap-5 " >
                    <li className="hvr-underline-from-center cursor-pointer">Home</li>
                    <li className="hvr-underline-from-center cursor-pointer">About</li>
                    <li className="hvr-underline-from-center cursor-pointer">Photo-Blast</li>
                    <li className="hvr-underline-from-center cursor-pointer">Misma</li>
                    <li className="hvr-underline-from-center cursor-pointer">#NWTS</li>

                    <Link href={'/register'}>
                        <li className="cursor-pointer"><FaRegCircleUser className="text-2xl"/></li>
                    </Link>

                </ul>

            </nav>

            {/* mobile view */}
            <nav className="flex lg:hidden items-center justify-between px-[1rem] py-2">
                <Link href={'/'}>
                    <div className="flex items-center gap-1">
                        <Image src='/image/logo.png' width={50} height={50} alt="logo"/>
                        <h3 className="text-sm font-delius">Port Harcourt H<sup>3</sup>
                            <span className="block text-[10px] font-bold font-delius">#NWTS</span>
                        </h3>
                    </div>
                </Link>

               <div>
               <div className="drawer drawer-end">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-4" className="drawer-button bt btn-primary"><IoMdMenu className="text-black text-3xl"/></label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-56 px-4 space-y-5 pt-5 font-delius">
                            <li>Home</li>
                            <li>About</li>
                            <li>Photo-Blast</li>
                            <li>Misma</li>
                            <li>#NWTS</li>

                            <Link href={'/register'}>
                                <li>Register</li>
                            </Link>
      
                        </ul>
                    </div>
                </div>
               </div>

            </nav>


        </div>
    )
};

export default Navbar;