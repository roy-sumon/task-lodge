import React from "react";
import logo from "./assets/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className="flex justify-around">
      <div className="flex flex-col items-center">
        <img className="w-40 h-20 mb-4" src={logo} alt="" />
        <h3 className="m-5">Follow us on social media</h3>
        <div className="flex gap-8 items-center mb-5">
          <div className="w-10 h-10 rounded-full bg-orange-300 flex justify-center items-center">
            <FaFacebookF />
          </div>
          <div className="w-10 h-10 rounded-full bg-orange-300 flex justify-center items-center">
            <FaLinkedinIn />
          </div>
          <div className="w-10 h-10 rounded-full bg-orange-300 flex justify-center items-center">
            <FaTwitter />
          </div>
        </div>
      </div>

      <div className="flex gap-x-20 items-center">
        <div>
            <h3 className="font-bold">Quick Links</h3>
            <li className="list-none mt-5 text-sm">
                <ul className="my-5">About Us</ul>
                <ul className="my-5">Our Services</ul>
                <ul className="my-5">Our Blog's</ul>
                <ul className="my-5">Contact</ul>
            </li>
        </div>
        <div>
            <h3 className="font-bold">Appoinment</h3>
            <li className="list-none mt-5 text-sm">
                <ul className="my-5">Web Design and developement</ul>
                <ul className="my-5">UI UX Service</ul>
                <ul className="my-5">Digital Marketing</ul>
                <ul className="my-5">Custom Web Design</ul>
            </li>
        </div>
        <div className="flex flex-col mt-0">
            <h3 className="font-bold mb-6">Contact Info</h3>
            <div>
                <span className="text-sm">Email</span>
                <p className="text-sm ">hunkcyAgencyUI@gmail.com</p>
            </div>

            <div className="text-sm mt-6">
                <span>Location</span>
                <p>302/1, Hazi Tower, Gandaria New <br /> Rd, Dhaka 1204</p>
            </div>
        </div>
      </div>

    </div>
      <div className="flex items-center justify-around h-16 bg-black text-white">
      <h4>©2024 Bookky | All Rights Reserved.</h4>
      <div className="flex items-center gap-5">
          <p>Terms and service</p>
          <p>Privacy and policy</p>
      </div>
</div>
    </>
  );
};

export default Footer;
