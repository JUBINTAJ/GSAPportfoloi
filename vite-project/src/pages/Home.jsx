import React from 'react';

function Home() {
  return (
    <div className='relative flex flex-col items-center justify-center w-full h-screen space-y-8 overflow-hidden '>

      <div className='absolute left-[800px] top-0 transform -translate-x-1/2 w-[2px] h-full bg-red-700'></div>

      <div className='absolute top-1/2 left-0 transform -translate-y-1/2 h-[2px] w-full bg-red-700'></div>

      <h1 className='text-[150px] font-bold text-red-600 font-bebas'>JUBIN TAJ</h1>

      <div className='w-full flex items-end justify-center'>
        <h2
          className='text-[360px] font-extrabold text-red-700 leading-none uppercase tracking-[-0.05em] font-bebas text-center'
          style={{ whiteSpace: 'nowrap' }}
        >
          PORTFOLIO
        </h2>
      </div>
    </div>
  );
}

export default Home;
