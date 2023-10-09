import { FaInstagram, FaX, FaTiktok, FaYoutube } from 'react-icons/fa6'
import Link from 'next/link'

const Footer = () => {
    return (

        <footer className=' bg-gradient-to-r from-gray-50 to-slate-50 py-16'>

            <div className='mx-10 flex items-center justify-between mt-auto'>
                <div className="socials">
                    <ul className="grid grid-cols-4 gap-3 justify-between items-center">
                        <li>
                            <Link href={"www.instagram.com"}>
                                <FaInstagram />
                            </Link>
                        </li>
                        <li>
                            <Link href={"www.instagram.com"}>
                                <FaX />
                            </Link>
                        </li>
                        <li>
                            <Link href={"www.instagram.com"}>
                                <FaTiktok />
                            </Link>
                        </li>
                        <li>
                            <Link href={"www.instagram.com"}>
                                <FaYoutube />
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col items-end justify-end">
                    <div>
                        <h3 className='text-2xl pb-4'>Subscribe for weekly updates and new finds</h3>
                    </div>
                    <div className="flex justify-center items-center">
                        <input type="text" placeholder='enter your email' className='py-2 px-4 rounded-xl bg-yellow-200 focus:outline-none mr-4' />
                        <button className='py-2 bg-black rounded-xl text-white px-3'>Join Now</button>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer