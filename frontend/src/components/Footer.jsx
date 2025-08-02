import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="mt-40">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 container mx-auto px-4 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="company logo" />
          <p className="w-full md:w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis
            reiciendis tempora delectus veniam, illo modi quisquam repellendus
            laborum molestiae!
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91-123456789</li>
            <li>contact@forever.co.in</li>
          </ul>
        </div>
      </div>
      <div>
        <hr className="border border-gray-200" />
        <p className="py-5 tex-sm text-center">
          Copyright 2024@forever.com - All Right Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
