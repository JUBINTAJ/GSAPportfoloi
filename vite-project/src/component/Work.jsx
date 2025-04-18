import React from 'react'
import { MdWork } from 'react-icons/md'

function Work() {
  return (
    <div className="w-full h-screen bg-black flex flex-col justify-between overflow-hidden">
      <div className="flex flex-grow items-start justify-end -mr-90"> 
        <h1
          className="text-[#F7FCFE] text-[14vw] leading-[1] tracking-tight uppercase font-extrabold origin-center scale-y-[0.8] scale-x-[0.4] whitespace-nowrap"
          style={{
            fontFamily: "'Anton', sans-serif",
            letterSpacing: "-0.09em",
          }}
        >
          WORK EXPERIENCE
        </h1>
      </div>

      <div className="mb-30 flex flex-col items-end mr-10 "> 
    <h1 className="text-xl text-[#F7FCFE] mt-2  leading-loose tracking-wider italic font-extrabold uppercase"
    >Present 2024</h1>

        <h2 className="text-xl text-[#F7FCFE] mt-2  leading-loose tracking-wider italic font-extrabold uppercase">
          Frontend Developer
        </h2>
        <p className="text-[#F7FCFE] w-[500px] leading-loose tracking-wider italic font-extrabold uppercase">
          At Bridgeon Solution, I developed mobile-first React web applications, optimizing performance with Redux and Zustand. I built fast, SEO-friendly apps with Next.js, integrated third-party services like Stripe, and mentored junior developers.
        </p>

        <h2 className="text-xl text-[#F7FCFE] mt-6 leading-loose tracking-wider italic font-extrabold uppercase">
          Backend Developer
        </h2>
        <p className="text-[#F7FCFE] w-[500px] leading-loose tracking-wider italic font-extrabold uppercase">
          I created scalable backend services using Node.js, Express, and MongoDB. I implemented JWT authentication, developed RESTful APIs, integrated payment gateways (Razorpay, Stripe), and streamlined deployment with Rendor.
        </p>
      </div>
    </div>
  )
}

export default Work
