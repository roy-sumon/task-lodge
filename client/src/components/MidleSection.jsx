import React from "react";
import house_1 from "../assets/bedroom-1.jpg";
import house_2 from "../assets/bedroom-2.jpg";
import house_3 from "../assets/bedroom-3.jpg";
import house_4 from "../assets/bedroom-4.jpg";
import house_5 from "../assets/bedroom-5.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

const MidleSection = () => {
  return (
    <div className="px-[10rem] mt-10">
      <div className="flex items-center">
        <h3 className="text-4xl font-semibold">
          Discover Homeya's Finest Properties For Your Dream Home
        </h3>
        <p>
          All three of Rooms Hotels locations are restorations that translate
          historic locations into places of contemporary comfort. Industrial
          architecture, salvaged building materials and the unique approach
        </p>
      </div>
      <div className="flex gap-7 mt-10">
        <img className="w-[50rem] h-[20rem] rounded-xl" src={house_1} alt="" />
        <img className="w-[23rem] h-[20rem] rounded-xl" src={house_2} alt="" />
      </div>
      <div className="flex gap-5 mt-5 mb-8">
        <img className="w-[24rem] h-[20rem] rounded-xl" src={house_3} alt="" />
        <img className="w-[24rem] h-[20rem] rounded-xl" src={house_4} alt="" />
        <img className="w-[24rem] h-[20rem] rounded-xl" src={house_5} alt="" />
      </div>
      <div className="flex items-center justify-center mb-10">
      <button className="bg-orange-200 px-7 py-3 rounded-full flex gap-5 items-center cursor-pointer font-semibold">
        View All <FaArrowRightLong />
      </button>
      </div>
    </div>
  );
};

export default MidleSection;
