import { Github } from 'lucide-react';
import React from 'react';

function Proj() {
  return (
    <div className="w-full h-screen bg-black flex flex-col justify-between overflow-hidden">
      <div className="flex flex-grow items-stretch justify-end mb-20 mr-20">
        <div className="flex items-stretch space-x-6 justify-between">
            <div className='-ml-20 -mb-10'>

          <img
            // src="/istockphoto-1157329704-612x612.jpg"
            alt="baby shop"
            className="h-[350px] w-auto object-cover rounded-xl"
          />
            </div>
            <div  className='  -ml-[1500px] '>

          <h1
            className="text-[#F7FCFE] text-[19vw] leading-[1] tracking-tight uppercase font-extrabold origin-right scale-y-[0.8] scale-x-[0.4] whitespace-nowrap flex items-end"
            style={{
              fontFamily: "'Anton', sans-serif",
              letterSpacing: '-0.09em',
            }}
          >
            E -
            COMMERSE
          </h1>
            </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-20 text-[#F7FCFE] text-lg leading-loose tracking-wider italic font-extrabold uppercase mb-10 gap-x-10">
        <div className="max-w-[40%]">
            <div className='flex space-x-7 '>
          <h2 className="text-3xl font-extrabold uppercase mb-4">FIRST PROJECT </h2>
          <a
        href="https://github.com/JUBINTAJ/BABY_FULL_STACK_E-commerse"
        target="_blank"
        rel="noopener noreferrer"
        className=" top-6 right-6 text-white hover:text-gray-400 transition-colors duration-200"
      >
        <Github size={32} />
      </a>
          
            </div>
       
            <p className='text-gray-400'>
            Baby Shop is an online store designed to offer a wide variety of high-quality products for babies and young children. From clothing and toys to essential care items and accessories, our goal is to provide parents with everything they need to care for their little ones in one convenient place. The website ensures a seamless shopping experience with easy navigation, secure transactions, and fast delivery services.
          </p>
        </div>

        <img
        //   src="/ChatGPT Image Apr 19, 2025, 03_14_30 PM.png"
          alt="baby shop"
          className="h-[400px] w-[800px] object-cover rounded-xl"
        />
      </div>
    </div>
  );
}

export default Proj;
