import React from "react";

function Main() {
  return (
    <div className="w-full h-screen bg-black flex flex-col justify-between overflow-hidden">
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
          <div className="max-w-[600px]  ml-20 leading-loose tracking-wider italic font-extrabold uppercase">
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
