import React from 'react';

function Project() {
  return (
    <div className="w-full h-screen bg-black flex flex-col justify-between overflow-hidden">
       <div className="mt-12 ml-30">
        <p className="text-[#F7FCFE] text-xl italic tracking-wide font-medium">
          Here’s a glimpse of what I’ve built.
        </p>
      </div>

       <div className="flex flex-col flex-grow items-start justify-end mb-20 ml-20 space-y-4">
        <h1
          className="text-[#F7FCFE] text-[23vw] leading-[0.7] tracking-tight uppercase font-extrabold origin-left scale-y-[0.8] scale-x-[0.4]"
          style={{
            fontFamily: "'Anton', sans-serif",
            letterSpacing: '-0.09em',
          }}
        >
          PROJECT
        </h1>
        <h1
          className="text-[#F7FCFE] text-[20vw] leading-[0.7] tracking-tight uppercase font-extrabold origin-left scale-y-[0.8] scale-x-[0.4]"
          style={{
            fontFamily: "'Anton', sans-serif",
            letterSpacing: '-0.09em',
          }}
        >
          PORTFOLIO
        </h1>
      </div>
    </div>
  );
}

export default Project;
