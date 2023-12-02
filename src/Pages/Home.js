import React from 'react'
import img from '../assets/img.png'
import img2 from '../assets/Shape2.png'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { MdWhatsapp } from "react-icons/md";
import { CiTwitter } from "react-icons/ci";
import img3 from '../assets/Shape3.png'
const Home = () => {
    return (
        <div className='flex justify-between items-center overflow-hidden h-screen'>
            <div className='flex flex-col w-[50%] '>
                <div className='flex flex-col items-start p-8 '>
                    <div className='ml-6'>
                        <span className='text-6xl text-[#354b58] font-bold'>+</span>
                    </div>
                    <div className='ml-8'>
                        <span className='text-7xl uppercase text-[#354b58] font-bold'>Choose your comfort house</span>
                    </div>
                </div>
                <div className='flex flex-col bg-[#354b58] text-white'>
                    <div className='p-8'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                        
                    <div><button className='bg-white p-1 mt-[8px] font-semibold  text-[#59493b] rounded-lg'>Read More</button></div>
                    </div>
                    <div className='flex bg-[#59493b] w-[45%] items-center justify-between py-[2px] px-5'>
                        <span className='ml-[5px]'>Follow Us : </span>
                        <ul className='flex gap-1 ml-[2px]'>
                            <Link><FaInstagram /></Link>
                            <Link><FaFacebookF /></Link>
                            <Link><MdWhatsapp /></Link>
                            <Link><CiTwitter /></Link>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='w-[50%]'>
            <div className='relative'>
                <img className='w-full h-full resize' src={img} alt="" />
            </div>
            <span className='bg-[#354b58] text-white absolute top-1/4 
            right-1 end-px py-[2px] px-2'>Call Us +21 7345 67</span>
            
            <div className='absolute  bottom-5 left-3/4 flex'>
                    <img className='w-full h-[180px] resize'src={img2} alt="" />
            </div>
            </div>
            <img className='w-[80px] h-[50px] absolute flex justify-center bottom-5 left-2/4 resize ' src={img3} alt="" />
        </div>
    )
}

export default Home