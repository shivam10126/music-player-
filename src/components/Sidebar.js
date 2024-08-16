import React from 'react';
import logo from "../assets/logo.svg"
import Home from "../assets/Home.svg"
import Trends from "../assets/Trends.svg"
import Library from "../assets/Library.svg"
import Discover from "../assets/Discover.svg"
import Settings from "../assets/Settings.svg"
import LogOut from "../assets/Log-Out.svg"

const Sidebar = () => {
  return (
    <div className='w-[18rem]  h-screen'>
      <div className="bg-black text-white fixed w-[18rem] h-screen p-5 pl-10">
      <div className="text-4xl font-[500] mb-10 flex flex-row text-[30px] align-middle"><img src={logo} alt="logo" className='w-[30px]  mr-3' /><span className='text-[#FF5353]'>Dream</span>Music</div>
      <ul>
        <h4 className='text-[14px] font-[500] text-[#CFC5C5] mb-2 mt-4 '>Menu</h4>
        <li className="mb-4 flex flex-row"><img src={Home} alt="" className='mr-3' /><a href="#" className="hover:text-red-500 text-[18px] ">Home</a></li>
        <li className="mb-4 flex flex-row"><img src={Trends} alt="" className='mr-3' /><a href="#" className="hover:text-red-500 text-[18px] ">Trends</a></li>
        <li className="mb-4 flex flex-row"><img src={Library} alt="" className='mr-3' /><a href="#" className="hover:text-red-500 text-[18px] ">Library</a></li>
        <li className="mb-6 flex flex-row"><img src={Discover} alt="" className='mr-3' /><a href="#" className="hover:text-red-500 text-[18px] ">Discover</a></li>
      </ul>
      <div className="mt-auto fixed bottom-12">
      <h4 className='text-[14px] font-[500] text-[#CFC5C5] mb-2 mt-4 '>General</h4>
        <ul>
          <li className="mb-4 flex flex-row"><img src={Settings} alt="" className='mr-3' /><a href="#" className="hover:text-red-500 text-[18px] ">Settings</a></li>
          <li className="flex flex-row"><img src={LogOut} alt="" className='mr-3' /><a href="#" className="hover:text-red-500 text-[18px] ">Log Out</a></li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
