import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'

function About() {
  return (
    <div className="relative w-full h-screen bg-black flex flex-col justify-start p-6 md:p-10 overflow-hidden">
      <div className="flex flex-col items-start space-y-6  ml-50">
        <h1
          className="text-[#F7FCFE] text-[10vw] leading-[0.7] tracking-tight uppercase font-extrabold origin-left scale-y-[0.8] scale-x-[0.4]"
          style={{
            fontFamily: "'Anton', sans-serif",
            letterSpacing: "-0.09em",
          }}
        >
          I'M JUBIN TAJ
        </h1>

        <p className="text-[#F7FCFE]/80 max-w-xl text-sm md:text-base leading-loose tracking-wider italic font-extrabold uppercase">
          A frontend developer passionate about crafting fast, visually stunning websites.
        </p>
      </div>

      <div className="absolute bottom-[900px] right-4 md:right-40">
        <h1
          className="text-[#F7FCFE] text-[10vw] md:text-[9vw] leading-[0.7] tracking-tight uppercase font-extrabold origin-bottom-right scale-y-[0.8] scale-x-[1]"
          style={{
            fontFamily: "'Anton', sans-serif",
            letterSpacing: "-0.09em",
            transform: 'rotate(-90deg)',
          }}
        >
          EDUCATION
        </h1>
      </div>

      <div className="mt-8 ml-50">
        <div className="flex items-center space-x-3">
          <FaGraduationCap className="text-[#F7FCFE] text-3xl" />
          <h1 className="text-2xl font-bold text-[#F7FCFE]">Education</h1>
        </div>

        <div className="mt-4 space-y-2">
          <p className="text-lg text-[#F7FCFE]">
            <span className="font-semibold">Bachelor of Computer Applications (BCA)</span> <br />
            <span className="text-sm text-[#F7FCFE]/70 leading-loose tracking-wider italic font-extrabold uppercase ">IGNOU University, Kerala — <span className="italic">Present (Expected 2025)</span></span>
          </p>

          <p className="text-[#F7FCFE]/80 text-sm max-w-2xl leading-loose tracking-wider italic font-extrabold uppercase">
            Currently pursuing BCA with a strong focus on web technologies, programming fundamentals, and computer science concepts.
            My academic journey has enriched me with skills in frontend and backend development, including HTML, CSS, JavaScript, React,
            Node.js, and database management systems.
          </p>
          
          <p className="text-[#F7FCFE]/80 text-sm max-w-2xl leading-loose tracking-wider italic font-extrabold uppercase mt-20">
            In addition to coursework, I actively participate in tech communities and coding competitions to continuously improve and stay
            updated with the latest trends in software development.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
