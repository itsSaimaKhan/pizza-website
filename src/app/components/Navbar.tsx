import React from "react";
import { BsSearchHeart } from "react-icons/bs";
import { FaPizzaSlice } from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa6";


export default function Navbar() {
  return (
    <div>
      <div className="grid xl:grid-cols-1 grid-cols-1">
        <div className="p-5">
          <div className="py-3 px-3 rounded-xl border w-full bg-gradient-to-r from-black to-gray-900">
            <div className="flex justify-between items-center">
              <div className="flex justify-items-center items-center gap-2">
                {/*logo pizza */}
                <FaPizzaSlice className="w-6 h-6 text-yellow-400 hover:text-cyan-300" />
                {/* search icon */}
                <div style={{ position: "relative" }}>
                  <input
                    className="rounded-3xl py-3 px-3 outline-none text-xs w-[350px] pr-10 hidden lg:block md:block"
                    placeholder="search for your favourite pizzas from menu."
                  />
                  <BsSearchHeart className="w-5 h-5 text-red-300 absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block" />
                </div>
              </div>
              <div className="flex justify-center items-center gap-2">
              <FaBoltLightning  className=" w-5 h-5 text-amber-400 hidden lg:block md:block"/>
              <p className="text-sm text-white hidden lg:block md:block">Order now and get it with
                <span className="text-amber-400">15 minutes!</span>
              </p>


              
              {/* cart icon */}
              <FaCartArrowDown  className="p-1 w-8 h-8 rounded-full ring-2 relative text-cyan-400 hover:text-amber-400"/>
              <img className="inline-block w-8 h-8 rounded-full ring-2 ring-sky-400 hover:text-amber-400"
              src="./images/autimg.jpg"
              alt="user avtar"/>

            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
