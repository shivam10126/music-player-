import React from 'react';
import michael from "../assets/Michael.png"
import MichaelBackground from '../assets/Michael-Background.png';
import verified from "../assets/verified.svg"

const ArtistSection = () => {
  return (
    <div className="flex dark-overlay flex-row-reverse items-center mb-1 justify-start align-middle px-16 mt-32 h-[300px] rounded-[40px] mx-auto w-[882px]"
    style={{
        backgroundImage: `url(${MichaelBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
         
        <img 
          src={michael} 
          alt="Michael Jackson" 
          className="  h-[450px] top-[-4.8rem] rotate-[1.3] relative left-32 "
        />
      <div className='mr-auto relative left-[300px]'>
      <div className='flex flex-row w-fit  h-fit  items-center '>
        <img src={verified} alt="verified" className='w-fit  mr-2' />
        <p className="text-[#CFC5C5] font-medium text-center  text-[14px]"> Verified Artist</p>
        </div>
        <h1 className="text-[40px] text-[#F6F6F6] w-[350px]   font-bold">Michael Jackson</h1>
        <p className="text-[#F6F6F6] font-medium mt-6 text-[14px]">27,852,501 monthly listeners</p>
      </div>
    </div>
  );
};

export default ArtistSection;
