import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaPlayCircle } from "react-icons/fa";
import house from "../assets/glassHouse.jpg";
import fireHouse from "../assets/winterHouse.jpg";
import waterHouse from "../assets/waterHouse.jpg";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-2 px-[10rem] mt-20 mb-16">
      <div>
        <h1 className="text-8xl font-serif">Find the top Hotels nearby</h1>
        <p className="mt-8">
          Looking for a comfortable and convenient place to call home? Our house
          rental offers spacious living areas, modern amenities, and a prime
          location. Featuring multiple bedrooms, updated kitchens, and cozy
          living spaces, it's perfect for families or professionals.
        </p>
        <li className="flex gap-24 mt-8">
            <ul>Vila</ul>
            <ul>Family House</ul>
            <ul>Hotel</ul>
            <ul>Room</ul>
        </li>
        <div className="flex items-center mt-4">
            <button className="bg-orange-100 px-5 py-3 rounded-full my-3">Discover now</button>
            <div className="ml-10 flex items-center gap-3">
                <FaPlayCircle className="h-10 w-10"/>
                <button className="font-semibold">Watch our story</button>
            </div>
        </div>
        <button className="font-semibold mt-5">Check Availability</button>
        <div className="flex flex-row overflow-x-visible gap-8 absolute items-center px-10 py-5 rounded-full mt-4 bg-white">
            <div>
                <h3 className="font-semibold">Check In</h3>
                <p>Add dates</p>
            </div>
            <div className="h-14 border-l-2 border-dotted"></div>
            <div>
                <h3 className="font-semibold">Check Out</h3>
                <p>Add dates</p>
            </div>
            <div className="h-14 border-l-2 border-dotted"></div>
            <div>
                <h3 className="font-semibold">Adults</h3>
                <p>Add Adults</p>
            </div>
            <div className="h-14 border-l-2 border-dotted"></div>
            <div>
                <h3 className="font-semibold">Children</h3>
                <p>Add Children</p>
            </div>
            <div className="h-14 border-l-2 border-dotted"></div>
            <div>
                <h3 className="font-semibold">Room's</h3>
                <p>Add Room's</p>
            </div>
            <div className="flex bg-orange-300 w-16 h-16 rounded-full items-center justify-center">
            <CiSearch className="w-8 h-10" />
            </div>
        </div>

      </div>

      <div>
        <img src={house} className="w-[30rem] h-[40rem] ml-28 rounded-lg" alt="house" />
      </div>
      <div className="">
        <img className="w-24 h-24 border-8 border-white rounded-full absolute z-10 right-[7.5rem] top-[25rem]" src={fireHouse} alt="fireHouse" />
      </div>
      <div>
        <img className="w-24 h-24 border-8 border-white rounded-full absolute z-10 right-[37rem] top-[7rem]" src={waterHouse} alt="WaterHouse" />
      </div>
    </div>
  );
};

export default HeroSection;
