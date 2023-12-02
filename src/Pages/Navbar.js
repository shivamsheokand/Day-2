import React from 'react'
import Logo from '../assets/Logo.png'
import Logo1 from '../assets/Shape1.png';
const Navbar = () => {
    return (
        <div className='flex justify-between items-center p-3'>
            <div className='flex items-center gap-3 '>
                <img className='h-[60px] w-[60px] resize' src={Logo1} alt="" />
                <img className='h-[27px] w-full text-[#59493b] resize cursor-pointer' src={Logo} alt="" />
            </div>
            <div className='flex items-center mr-10 gap-10 p-3 cursor-pointer'>
                <ul className='flex items-center gap-8 '>
                    <li className='uppercase font-semibold text-[#354b58] underline'>Home</li>
                    <li className='uppercase font-semibold text-[#354b58]'>About</li>
                    <li className='uppercase font-semibold text-[#354b58]'>Service</li>
                    <li className='uppercase font-semibold text-[#354b58]'>Price</li>
                    <li className='uppercase font-semibold text-[#354b58]'>Promo</li>
                </ul>
                <button className='bg-[#354b58] text-white py-1 px-3 font-semibold text-lg cursor-pointer mr-10'>Login</button>
            </div>
        </div>
    )
}

export default Navbar