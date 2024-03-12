import React from "react";
import roshn_img from "../assets/roshan.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
function Home() {
  return (
    <div name="home" className="w-full bg-gradient-to-b from-black to-gray-800">
      <div className="flex flex-col items-center justify-center h-full max-w-screen-lg px-4 pt-16 mx-auto overflow-hidden md:flex-row">
        <div className="flex flex-col justify-center mt-8 mb-8 md:h-full">
          <h2 className="pb-4 mt-16 overflow-y-hidden text-4xl font-bold text-white sm:text-5xl">
            I am a Frontend Web Developer
          </h2>
          <p className="max-w-md py-4 overflow-y-hidden text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas,
            odit atque vitae libero aliquam mollitia, doloribus quaerat ullam,
            iste fuga vero rerum corporis animi? Tempora modi mollitia tempore
            praesentium. Eveniet.
          </p>
          <div>
            <button className="flex items-center px-6 py-3 my-2 text-white rounded-md w-fit bg-gradient-to-r from-cyan-500 to-blue-500 group">
              Portfolio
              <span className="duration-300 group-hover:rotate-90">
                <MdOutlineKeyboardArrowRight size={23} />
              </span>
            </button>
          </div>
        </div>
        <div className="mb-32 sm:mb-0 sm:mt-16">
          <img
            src={roshn_img}
            alt="my profile"
            className="w-56 mx-auto rounded-2xl md:w-[20rem]  "
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
