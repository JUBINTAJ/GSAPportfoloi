import React, { useEffect } from 'react'
import gsap from 'gsap'

function Main() {
  useEffect(() => {
    const main = document.querySelector('#main');
    const cursor = document.querySelector('#cursor');

    if (main && cursor) {
      main.addEventListener("mousemove", function (dets) {
        gsap.to(cursor, {
          x: dets.clientX,
          y: dets.clientY,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    }
  }, []);

  return (
    <div id="main" className="w-full h-screen bg-black flex flex-col justify-between overflow-hidden relative">
      <div
        id="cursor"
        className="cursor h-20 w-20 bg-red-900 rounded-full absolute pointer-events-none"
        style={{ transform: 'translate(-50%, -50%)' }}
      ></div>

      <div className="flex flex-col">
        <div className="w-full flex justify-between pr-10 pt-10 ">
          <div className="text-start pl-10 ">
            <h1
              className="text-[#F7FCFE] text-[4vw] leading-none tracking-tight uppercase font-bold ml-16 mt-16"
              style={{
                fontFamily: "'Anton', sans-serif",
                letterSpacing: "-0.09em",
              }}
            >
              CREATIVE
            </h1>
          </div>
          <div
            className="text-[#F7FCFE] text-[3vw] text-end"
            style={{
              fontFamily: "'Anton', sans-serif",
              letterSpacing: "-0.09em",
            }}
          >
            <h1>OCTOBER / 2005</h1>
            <h2>JUBIN TAJ</h2>
          </div>
        </div>

        <div className="text-center -mt-10">
          <h1
            className="text-[#F7FCFE] text-[40vw] leading-[0.7] tracking-tight uppercase font-extrabold origin-center mr-[1600px] scale-y-[0.8] scale-x-[0.4]"
            style={{
              fontFamily: "'Anton', sans-serif",
              letterSpacing: "-0.09em",
            }}
          >
            PORTFOLIO
          </h1>
        </div>

        <div
          className="text-[#F7FCFE] px-10 mt-4"
          style={{
            fontFamily: "'Anton', sans-serif",
          }}
        >
          <div className="max-w-[600px] ml-20 leading-loose tracking-wider italic font-extrabold uppercase">
            <p>
              I enjoy building fast, visually appealing websites with the latest technologies. I specialize in Html, CSS, JavaScript, React, Redux, Zustand, TypeScript, and Next.js to create smooth, user-friendly web apps that perform great across all devices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
