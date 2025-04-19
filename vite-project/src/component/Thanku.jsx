import React, { useEffect } from 'react';
import gsap from 'gsap';

function Thanku() {
  useEffect(() => {
    const main = document.querySelector('#main-thanku');
    const cursor = document.querySelector('#cursor-thanku');
    const heading = document.querySelector('#hoverTarget-thanku');

    if (!main || !cursor || !heading) return;

    const moveHandler = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const mouseEnterHandler = () => {
      cursor.innerHTML = '🙏';
      gsap.to(cursor, {
        scale: 4,
        duration: 0.3,
        backgroundColor: 'transparent',
        color: '#fff',
      });
    };

    const mouseLeaveHandler = () => {
      cursor.innerHTML = '';
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        backgroundColor: '#7f1d1d',
      });
    };

    main.addEventListener('mousemove', moveHandler);
    heading.addEventListener('mouseenter', mouseEnterHandler);
    heading.addEventListener('mouseleave', mouseLeaveHandler);

    return () => {
      main.removeEventListener('mousemove', moveHandler);
      heading.removeEventListener('mouseenter', mouseEnterHandler);
      heading.removeEventListener('mouseleave', mouseLeaveHandler);
    };
  }, []);

  return (
    <div
      id="main-thanku"
      className="w-full h-screen bg-black flex flex-col justify-between overflow-hidden relative"
    >
      <div className="text-center items-center justify-start mr-[800px]">
        <h1
          id="hoverTarget-thanku"
          className="text-[#F7FCFE] text-[25vw] leading-[1] tracking-tight uppercase font-extrabold origin-center scale-y-[0.8] scale-x-[0.4] whitespace-nowrap"
          style={{
            fontFamily: "'Anton', sans-serif",
            letterSpacing: "-0.09em",
          }}
        >
          THANK YOU
        </h1>
      </div>

      <div
        id="cursor-thanku"
        className="cursor h-16 w-16 bg-red-900 rounded-full absolute pointer-events-none flex items-center justify-center text-white text-[20px] font-bold uppercase text-center"
        style={{ transform: 'translate(-50%, -50%)' }}
      ></div>
    </div>
  );
}

export default Thanku;
