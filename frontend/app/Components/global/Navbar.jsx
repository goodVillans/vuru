import React from 'react'
import { FaInstagram, FaX, FaTiktok, FaYoutube } from 'react-icons/fa6'
import Link from 'next/link'
const Navbar = () => {
    return (
        <header className='mt-6 mx-10'>
            <div className="NAV CONTIANER grid grid-cols-3 col-span-3 justify-center items-center">
                <div className="LOGO">
                    <h1 className="text-2xl  text-yellow-600">
                        VURU
                    </h1>
                </div>

                <div className="PAGE-NAV">
                    <ul className='flex items-center justify-center'>
                        <li className='mx-3'>Blog</li>
                        <li className='mx-3'>Guides</li>
                        <li className='mx-3'>Contact</li>
                        <li className='mx-3'>Our Story</li>
                    </ul>
                </div>

                <div className=" flex items-center justify-end text-center">
                    <div className="justify-center items-center">
                        <button className='p-1 bg-black mx-5 rounded-xl text-white px-3'>
                            Sell your antiques
                        </button>
                    </div>
                    <div className="SOCIALS">
                        <ul className='grid grid-cols-4 gap-3 justify-center items-center'>
                            <li>
                                <Link href={"www.instagram.com"}>
                                    <FaInstagram/>
                                </Link>
                            </li>
                            <li>
                                <Link href={"www.instagram.com"}>
                                    <FaX/>
                                </Link>
                            </li>
                            <li>
                                <Link href={"www.instagram.com"}>
                                    <FaTiktok/>
                                </Link>
                            </li>
                            <li>
                                <Link href={"www.instagram.com"}>
                                    <FaYoutube/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar