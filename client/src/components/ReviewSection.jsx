import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import man_1 from "../assets/man_1.jpg";
import man_2 from "../assets/man_2.jpg";

const ReviewSection = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-1">
      <div className="bg-black w-[30rem] h-[15rem] sm:w-[53rem] sm:h-[20rem] text-white flex flex-col items-center justify-center mb-14">
        <h1 className="text-2xl sm:text-4xl">
          Rave Reviews from Our <br /> Satisfied Guests
        </h1>
        <div className="flex items-center mt-10 font-bold text-2xl gap-10">
          <div className="bg-white p-5 rounded-full">
            <FaArrowLeftLong className="text-black" />
          </div>
          <BsThreeDots />
          <div className="bg-orange-200 p-5 rounded-full">
            <FaArrowRightLong />
          </div>
        </div>
      </div>

{/* Review man 1 */}
      <div className="flex flex-col sm:flex-row items-center p-5 gap-5">
        <div className="bg-white h-[15rem] w-[25rem] p-5 rounded-xl">
          <div className="flex">
            <img className="w-14 h-14 rounded-full" src={man_1} alt="" />
            <div className="ml-4">
              <h2 className="font-semibold">Arman</h2>
              <p>Webflow Developer</p>
            </div>
          </div>
          <p className="mt-5">
              Amazing design, easy to customize and a design quality superlative
              account on its cloud platform for the optimized performance. And
              we didn't on our original designs.
            </p>
            <div className="flex mt-5">
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            </div>
        </div>

 {/* Review man 2 */}
        <div className="bg-white h-[15rem] w-[25rem] p-5 rounded-xl">
          <div className="flex">
            <img className="w-14 h-14 rounded-full" src={man_2} alt="" />
            <div className="ml-4">
              <h2 className="font-semibold">Arman</h2>
              <p>Webflow Developer</p>
            </div>
          </div>
          <p className="mt-5">
              Amazing design, easy to customize and a design quality superlative
              account on its cloud platform for the optimized performance. And
              we didn't on our original designs.
            </p>
            <div className="flex mt-5">
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            </div>
        </div>
      </div>
     
    </div>
  );
};

export default ReviewSection;
