import React from 'react'
import logo from '../assets/logo.png'

const Navber = () => {
  return (
   <>
    <div className='bg-white flex justify-around items-center border border-b-1'>
        <img className='w-[160px] h-[70px]' src={logo} alt="" />
        <li className='hidden sm:flex gap-8'>
            <ul className='hover:font-semibold cursor-pointer'>Home</ul>
            <ul className='hover:font-semibold cursor-pointer'>About</ul>
            <ul className='hover:font-semibold cursor-pointer'>Rooms</ul>
            <ul className='hover:font-semibold cursor-pointer'>Blog</ul>
            <ul className='hover:font-semibold cursor-pointer'>Page</ul>
        </li>
        <div>
            <button className='hover:font-semibold'>Login/Signup</button>
            <button className='ml-3 bg-orange-300 px-5 py-3 hover:font-semibold rounded-full cursor-pointer'>Reservation</button>
        </div>

    </div>
   </>
  )
}

export default Navber