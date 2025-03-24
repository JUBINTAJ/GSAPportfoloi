import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Home() {
  const portfolioRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const element = portfolioRef.current;

    const animation = gsap.fromTo(
      element,
      { x: '100%' },
      {
        x: '-100%',
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',       
          end: '+=1100',         
          scrub: 4,              
        },
      }
    );

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden bg-white">
      <div className="absolute left-[700px] transform -translate-x-1/2 w-[2px] h-full bg-red-700 z-10"></div>
      <div className="absolute top-[300px] transform -translate-y-1/2 h-[2px] w-full bg-red-700 z-10"></div>

      <div className="relative z-20 flex flex-col items-center space-y-6 mt-72">
        <h1 className="text-[150px] font-bold text-red-600 leading-tight tracking-tight">
          JUBIN TAJ
        </h1>
        <div className="w-full flex items-end justify-center overflow-hidden">
          <h2
            ref={portfolioRef}
            className="text-[380px] font-extrabold text-red-700 uppercase leading-[0.8] mt-10 whitespace-nowrap"
            style={{ letterSpacing: '-0.10em' }}
          >
       MY PERSONAL  PORTFOLIO
          </h2>
        </div>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-start z-0 ">
        <h1
          className="text-[190px] text-red-950 uppercase font-extrabold opacity-10 pointer-events-none select-none blur-[4px] mt-10 whitespace-nowrap"
          style={{ letterSpacing: '-0.11em' }}
        >
          FRONT END DEVELOPER
        </h1>
        <p className="max-w-5xl text-center text-red-950 font-extrabold opacity-10 pointer-events-none select-none text-lg leading-relaxed mr-[800px] ">
          I enjoy building fast, visually appealing websites with the latest technologies. I specialize in HTML, CSS, JavaScript, React, Redux, Zustand, TypeScript, and Next.js to create smooth, user-friendly web apps that perform great across all devices.
        </p>
      </div>
    </div>
  );
}

export default Home;
