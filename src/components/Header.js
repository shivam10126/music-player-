import React from "react";
import search from "../assets/search.svg"

const Header = () => {
  return (
    <div className="flex justify-between items-center px-6 mb-10">
      <div>
        <a
          href="#"
          className="mr-8 text-lg text-[#F6F6F6] hover:text-[#FF5353]"
        >
          Music
        </a>
        <a
          href="#"
          className="mr-8 text-lg text-[#F6F6F6] hover:text-[#FF5353]"
        >
          Podcast
        </a>
        <a
          href="#"
          className="mr-8 text-lg text-[#F6F6F6] hover:text-[#FF5353]"
        >
          Live
        </a>
        <a
          href="#"
          className="text-lg text-[#F6F6F6] hover:text-[#FF5353]"
        >
          Radio
        </a>
      </div>
      <div className="flex">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 bg-[#2C0000] border-none  w-[413px] h-[44px] text-white rounded-full"
          value="Michael Jackson"
        />
        <img src={search} alt="search" className="relative right-12 scale-75 " />
      </div>
    </div>
  );
};

export default Header;
