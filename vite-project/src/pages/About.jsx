import React from 'react';

function About() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden bg-white">
      <div className="absolute top-[50px] left-0 transform -translate-y-1/2 h-[2px] w-full bg-red-700 z-10"></div>
      <div className="absolute left-[700px] top-0 transform -translate-x-1/2 w-[2px] h-full bg-red-700 z-10"></div>
      <div className="absolute top-[300px] left-0 transform -translate-y-1/2 h-[2px] w-full bg-red-700 z-10"></div>


      <div className="relative z-20 flex flex-col items-center space-y-6 mt-72">
        <h1 className="text-[150px] font-bold text-red-600 font-bebas leading-tight tracking-tight">
        </h1>
        <div className="w-full flex items-end justify-center">
       
        </div>
      </div>

      <div className="absolute inset-0  items-start justify-center z-0">
        <h1 
          className="text-[190px] text-red-950 text-enduppercase font-extrabold opacity-10 text-end pointer-events-none select-none blur-[4px]"
          style={{
            letterSpacing: '-0.11em',
            whiteSpace: 'nowrap',
          }}
        >
          About me
        </h1>
        <p className="max-w-5xl text-center text-red-950 font-extrabold opacity-10 pointer-events-none select-none  text-lg leading-relaxed px-10 pt-9">


        </p>
      </div>
      
    </div>
  );
}

export default About;
