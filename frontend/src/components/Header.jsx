import React, { useState } from 'react'
import Container from './Container'
import { FaAngleRight, FaLanguage, FaPhoneAlt, FaQuoteLeft, FaUserFriends } from 'react-icons/fa'
import { MdCategory, MdContactMail, MdOutlineLocalPhone, MdPhotoLibrary, MdVideoLibrary } from 'react-icons/md'
import { CiHeart, CiLocationOn, CiShoppingCart, CiUser } from 'react-icons/ci'
import { IoIosSearch, IoMdMenu } from 'react-icons/io'
import { TiDeleteOutline } from 'react-icons/ti'
import { GoDot } from 'react-icons/go'
import { ReactTyped } from 'react-typed'
import { IoHomeOutline } from 'react-icons/io5'
import { FiBox } from 'react-icons/fi'
import { RiShieldUserLine } from 'react-icons/ri'

export default function Header() {
    const [open, setOpen] = useState(false)
    const [open1, setOpen1] = useState(false)

    return (
        <div className='sticky top-0 left-0 z-50 bg-white  shadow'>
            <header>
                <Container>
                    {/* Desktop */}
                    <div className='hidden lg:block p-4'>
                        <div className="flex items-center justify-between border-b border-gray-600 pb-2">
                            <div className='flex items-center gap-5 text-sm  '>
                                <div className='flex items-center gap-2'>
                                    <FaPhoneAlt />
                                    <span>BM</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <MdOutlineLocalPhone />
                                    <span>+91-9229928258</span>
                                </div>
                            </div>

                            <div className='flex items-center gap-3'>
                                <img src="/images/bmilogo.jpg" width={30} alt="logo" />
                                <div className=' text-xl font-semibold tracking-wide'>
                                    <a href="/">
                                        <ReactTyped
                                            strings={[
                                                "Business Machine India Pvt Ltd",
                                                "Business Machine India Pvt Ltd"
                                            ]}
                                            typeSpeed={100}
                                            backSpeed={100}
                                            backDelay={1000}
                                            loop={true}
                                        />
                                    </a>

                                </div>
                            </div>
                            <div className='flex items-center gap-4 text-sm'>
                                <div className='flex items-center gap-2 cursor-pointer'>
                                    <CiLocationOn size={18} />
                                    <span>Jaipur</span>
                                </div>
                                {/* <a href="/addtocart"><CiShoppingCart size={18} /></a> */}
                                <CiHeart size={18} className="cursor-pointer " />
                                <div className='flex items-center gap-1  cursor-pointer'>

                                    <a href="/login"><span>Log In</span></a>
                                </div>
                                <div className='flex items-center gap-1 hover:text-black duration-500 cursor-pointer'>

                                    <a href="/signup"><span> Sign Up</span></a>
                                </div>
                            </div>

                        </div>


                        <div className='lg:flex hidden justify-end flex-wrap mt-5  items-center gap-5'>
                            <div className="relative group">
                                <div className='p-2 hover:bg-[#1D5B86] hover:text-white rounded cursor-pointer duration-300'>
                                    <IoMdMenu onClick={() => setOpen1(!open1)} size={20} />
                                </div>
                                <div className={`absolute top-10 left-0 ${open1 == true ? 'opacity-100' : 'opacity-0'}   transition-all duration-300`}>
                                    <div className="bg-white text-black rounded shadow-lg p-3 w-72 space-y-2">
                                        <div onClick={() => setOpen1(false)} className=' px-3 py-1 rounded cursor-pointer'>Hulling and Milling Machines</div>
                                        <div onClick={() => setOpen1(false)} className=' px-3 py-1 rounded cursor-pointer'>Packaging Machines</div>
                                        <div onClick={() => setOpen1(false)} className=' px-3 py-1 rounded cursor-pointer'>Cold Press Oil Machine</div>
                                        <div onClick={() => setOpen1(false)} className=' px-3 py-1 rounded cursor-pointer'>Nail Making Machine</div>
                                        <div onClick={() => setOpen1(false)} className=' px-3 py-1 rounded cursor-pointer'>Wire Polishing Machine</div>
                                        <div onClick={() => setOpen1(false)} className=' px-3 py-1 rounded cursor-pointer'>Wire Drawing Machine</div>
                                        <div onClick={() => setOpen1(false)} className=' px-3 py-1 rounded cursor-pointer'>Cable Machine</div>
                                        <div onClick={() => setOpen1(false)} className=' px-3 py-1 rounded cursor-pointer'>Chain Link Wire Machine</div>
                                        <div onClick={() => setOpen1(false)} className=' px-3 py-1 rounded cursor-pointer'>Grinding Machine</div>
                                        <div onClick={() => setOpen1(false)} className=' px-3 py-1 rounded cursor-pointer'>Rice Sorting Machine</div>
                                        <div onClick={() => setOpen1(false)} className=' px-3 py-1 rounded cursor-pointer'>Vertical Band Sealer</div>
                                    </div>
                                </div>
                            </div>
                            <a href="/" onClick={() => setOpen1(false)}>
                                <div className="flex items-center gap-2">
                                    <IoHomeOutline /> <span>Home</span>
                                </div>
                            </a>
                            <div onClick={() => setOpen1(false)} className='cursor-pointer'>
                                <div className="flex items-center gap-2">
                                    <FiBox /> <span>Products</span>
                                </div>
                            </div>
                            <div onClick={() => setOpen1(false)} className='cursor-pointer'>
                                <div className="flex items-center gap-2">
                                    <FaUserFriends /> <span>About Us</span>
                                </div>
                            </div>
                            <div onClick={() => setOpen1(false)} className='cursor-pointer'>
                                <div className="flex items-center gap-2">
                                    <MdPhotoLibrary /> <span>Gallery</span>
                                </div>
                            </div>
                            <div onClick={() => setOpen1(false)} className='cursor-pointer'>
                                <div className="flex items-center gap-2">
                                    <MdVideoLibrary /> <span>Videos</span>
                                </div>
                            </div>
                            <div onClick={() => setOpen1(false)} className='cursor-pointer'>
                                <div className="flex items-center gap-2">
                                    <FaQuoteLeft /> <span>Testimonials</span>
                                </div>
                            </div>
                            <div onClick={() => setOpen1(false)} className='cursor-pointer'>
                                <div className="flex items-center gap-2">
                                    <MdContactMail /> <span>Contact Us</span>
                                </div>
                            </div>
                            <div onClick={() => setOpen1(false)} className='cursor-pointer'>
                                <div className="flex items-center gap-2">
                                    <RiShieldUserLine /> <span>Privacy Policy</span>
                                </div>
                            </div>
                            <a href='createproduct' onClick={() => setOpen1(false)} className='cursor-pointer'>
                                <div className="flex items-center gap-2">
                                    <RiShieldUserLine /> <span>Admin Panel</span>
                                </div>
                            </a>


                        </div>

                    </div>

                    {/* Mobile */}
                    <div className='lg:hidden block  bg-white'>
                        <div className="flex justify-between items-center p-4">
                            <a href="/"> <img src="/images/bmilogo.jpg" width={50} alt="logo" /></a>
                            {open == true ? <TiDeleteOutline size={28} onClick={() => setOpen(false)} /> : <IoMdMenu size={28} onClick={() => setOpen(true)} />}
                        </div>

                        <div className={`relative  w-full `}>
                            <div className={`w-full absolute  h-screen z-40 top-0 left-0 overflow-y-auto  bg-[rgba(0,0,0,0.4)] transition-all duration-500 ${open ? 'left-0 opacity-100' : 'left-[-100%] opacity-0'}`}>
                                <div className={`w-[80%] absolute  h-screen z-40 top-0 left-0 overflow-y-auto  bg-white text-black transition-all duration-500 ${open ? 'left-0' : 'left-[-100%]'}`}>


                                    <div className='space-y-4 p-4 text-sm text-[#1D5B86]'>

                                        <div className="flex items-center justify-between text-gray-600">
                                            <div className='flex items-center gap-2'><FaLanguage /> Language</div>
                                            <div className='flex items-center gap-1'><span>English</span> <FaAngleRight /></div>
                                        </div>


                                        <div onClick={() => setOpen(false)} className='space-y-3 gap-2 text-gray-800  cursor-pointer'>
                                            <div className="flex items-center gap-2">
                                                <IoHomeOutline /> <span>Home</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MdCategory /> <span>Categories</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FiBox /> <span>Products</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaUserFriends /> <span>About Us</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MdPhotoLibrary /> <span>Gallery</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MdVideoLibrary /> <span>Videos</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaQuoteLeft /> <span>Testimonials</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MdContactMail /> <span>Contact Us</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <RiShieldUserLine /> <span>Privacy Policy</span>
                                            </div>
                                            <a href='createproduct' onClick={() => setOpen1(false)} className='cursor-pointer'>
                                                <div className="flex items-center gap-2">
                                                    <RiShieldUserLine /> <span>Admin Panel</span>
                                                </div>
                                            </a>
                                        </div>

                                    </div>
                                    <div className='w-full flex items-center text-white my-5 gap-3'>
                                        <a href="/login" className='w-full'><button onClick={() => setOpen(false)} className="w-full bg-[#1D5B86] p-2">Log In</button></a>
                                        <a href="/signup" className='w-full'><button onClick={() => setOpen(false)} className="w-full  bg-[#1D5B86] p-2">Sign Up</button></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className=" fixed text-[#1D5B86] bg-white p-2 bottom-0 flex w-full items-center justify-between">
                            <div className="flex flex-col items-center gap-2">
                                <IoHomeOutline size={25} /> <span className='text-[13px]'>Home</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <MdCategory size={25} /> <span className='text-[13px]'>Categories</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <FiBox size={25} /> <span className='text-[13px]'>Products</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <FaUserFriends size={25} /> <span className='text-[13px]'>About Us</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <MdPhotoLibrary size={25} /> <span className='text-[13px]'>Gallery</span>
                            </div>
                        </div>
                    </div>
                </Container>
            </header>
        </div >
    )
}
