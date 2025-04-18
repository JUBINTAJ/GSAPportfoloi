import React from 'react'
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Contact() {
  return (
    <div className="w-full h-screen bg-black flex flex-col overflow-hidden">
      <div className="flex items-start justify-start mt-10 ml-20">
        <h1
          className="text-[#F7FCFE] text-[17vw] leading-[1] tracking-tight uppercase font-extrabold origin-top-left scale-y-[0.8] scale-x-[0.4] whitespace-nowrap"
          style={{
            fontFamily: "'Anton', sans-serif",
            letterSpacing: "-0.09em",
          }}
        >
          CONTACT ME
        </h1>
      </div>

      <div className="flex justify-end mr-30 mt-6  "  >
        <div className="grid grid-cols-2 gap-x-16 gap-y-10 text-[#F7FCFE] text-right">
          <div className="flex flex-col items-end space-y-2">
            <h2 className="text-base leading-loose tracking-wider italic font-extrabold uppercase">Phone Number</h2>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">+91 85909 59856</span>
            </div>
          </div>

          <div className="flex flex-col items-end space-y-2">
            <h2 className="text-base leading-loose tracking-wider italic font-extrabold uppercase">Email Address</h2>
            <a
              href="jubintajj@gmail.com"
              className="flex items-center space-x-3 hover:text-cyan-300 transition-colors duration-200"
            >
              <span className="text-2xl">jubintajj@gmail.com</span>
            </a>
          </div>

          <div className="flex flex-col items-end space-y-2">
            <a
              href="https://github.com/JUBINTAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 hover:text-cyan-300 transition-colors duration-200"
            >
              <span className="text-2xl leading-loose tracking-wider italic font-extrabold uppercase">GitHub</span>
              <FaGithub className="text-3xl" />
            </a>
          </div>

          <div className="flex flex-col items-end space-y-2">
            <a
              href="https://www.linkedin.com/in/jubin-taj-137383316/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 hover:text-cyan-300 transition-colors duration-200"
            >
              <span className="text-2xl leading-loose tracking-wider italic font-extrabold uppercase">LinkedIn</span>
              <FaLinkedin className="text-3xl" />
            </a>
          </div>

          <div className="flex flex-col items-center space-y-2 col-span-2">
            <h2 className="text-base leading-loose tracking-wider italic font-extrabold uppercase">Location</h2>
            <a
              href="https://www.google.com/maps/place/Malappuram,+Kerala"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 hover:text-cyan-300 transition-colors duration-200"
            >
              <span className="text-2xl">Malappuram, Kerala, India</span>
              <MdLocationOn className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
