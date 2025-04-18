// import React, { useEffect, useRef, useState } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { FaGraduationCap } from 'react-icons/fa';
// import { MdWork } from 'react-icons/md';
// import Skills from './Skills';
// import { Code2, Github, Linkedin, Twitter } from 'lucide-react';
// import dayjs from 'dayjs';
// import utc from 'dayjs/plugin/utc';
// import timezone from 'dayjs/plugin/timezone';
// import SkillsSection from './Skills';
// import SkillsMarquee from './Skills';


// gsap.registerPlugin(ScrollTrigger);

// function Portfolio() {
//   const portfolioRef = useRef(null);
//   const skillss = useRef(null);
  
//   const [currentTime, setCurrentTime] = useState('');
//   const [isLoaded, setIsLoaded] = useState(false);



  
//     useEffect(() => {
//       setIsLoaded(true);
//     }, []);
  

//   useEffect(() => {
//     const element = portfolioRef.current;

//     gsap.fromTo(
//       element,
//       { x: '30%' },
//       {
//         x: '-100%',
//         ease: 'none',
//         scrollTrigger: {
//           trigger: element,
//           start: 'top 60%',
//           end: '+=900',
//           scrub: 2,
//         },
//       }
//     );
//   }, []);



  
//   dayjs.extend(utc);
// dayjs.extend(timezone);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const timeInIST = dayjs().tz('Asia/Kolkata').format('hh:mm:ss A '); 
//       setCurrentTime(timeInIST);
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);



//   return (
//     <div className="w-full bg-white text-black">
//       <section className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden ">
//         <div>

//         </div>
//         <div className="relative z-20 flex flex-col items-center space-y-6 mt-72  ">
//           <h1 className="text-[150px] font-bold text-black leading-tight tracking-tight  mt-16">
//             JUBIN TAJ
//           </h1>
//                  <div className={`flex space-x-6 mt-8 transition-all duration-1000 delay-600 transform ${
//           isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//         }`}>
//           <a href="https://github.com/JUBINTAJ" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
//             <Github className="w-6 h-6 text-gray-700" />
//           </a>
//           <a href="https://www.linkedin.com/in/jubin-taj-137383316/" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
//             <Linkedin className="w-6 h-6 text-gray-700" />
//           </a>
//           <a href="#" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
//             <Twitter className="w-6 h-6 text-gray-700" />
//           </a>
//         </div>
   

//    {/* <div className='border-2 w-[00px] mr-[1190px]'>
//     <img src="/ezgif-85ce91945d356b.gif" alt="" />
//    </div> */}
//         </div>
//         <div className="absolute inset-0 flex flex-col items-center justify-start z-0">
//           <div className='flex justify-start mr-[1700px] mt-7 text-2xl text-red-700  font-stretch-semi-condensed'>

//           {currentTime}
//           </div>
          
//           <h1
//             className="text-[190px] text-red-950 uppercase font-extrabold opacity-10 pointer-events-none select-none blur-[4px] mt-10 whitespace-nowrap"
//             style={{ letterSpacing: '-0.11em' }}
//           >
//             FRONT END DEVELOPER
//           </h1>
//           <p className="max-w-5xl text-center text-black font-extrabold opacity-10 pointer-events-none select-none text-xl leading-relaxed   mt-10">
//             I enjoy building fast, visually appealing websites with the latest technologies. I specialize in HTML, CSS, JavaScript, React, Redux, Zustand, TypeScript, and Next.js to create smooth, user-friendly web apps that perform great across all devices.
//           </p>
//         </div>
//       </section>
//       <section  className=''>

//           <div className="w-full flex   justify-center overflow-hidden">
//             <h2
//               ref={portfolioRef}
//               className="text-[280px] font-extrabold text-black uppercase leading-[0.8] mt-10 whitespace-nowrap"
//               style={{ letterSpacing: '-0.10em' }}
//             >
//               SHOWCASING MY WORK &  PASSION
//             </h2>
//           </div>
//       </section>

//       <section className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden">
//         <div className="relative z-20 flex w-full px-20 items-center justify-between mt-40">
//           <div className="text-left max-w-xl">
//             <h1 className="text-black text-5xl font-bold">
//               Hi! I'm <span className="text-red-950">JUBIN TAJ</span>
//             </h1>
//             <p className="text-xl text-black mt-4 w-full">
//               A frontend developer passionate about crafting fast, visually stunning websites.
//             </p>

//             <div className="mt-8">
//               <div className="flex items-center space-x-3">
//                 <FaGraduationCap className="text-black text-3xl" />
//                 <h1 className="text-2xl font-bold text-black">Education</h1>
//               </div>
//               <p className="text-lg text-black mt-2">BCA - Present (2025)</p>
//             </div>

//             <div className="mt-6">
//               <div className="flex items-center space-x-3">
//                 <MdWork className="text-black text-3xl" />
//                 <h1 className="text-2xl font-bold text-black">Professional Experience</h1>
//               </div>
//               <h2 className="text-xl text-black font-semibold mt-2">Frontend Developer</h2>
//               <p className="text-lg text-black">
//                 Bridgeon Solution <br />
//                 2024 - Present <br />
//                 - Developed responsive web applications using React <br />
//                 - Implemented state management using Redux and Zustand <br />
//                 - Built performant applications with Next.js
//               </p>
//             </div>
//           </div>

//           <div className="flex flex-col items-center text-center px-10 py-6 rounded-xl border-2 border-gray-300 shadow-lg">
//             <h1 className="text-black text-3xl font-bold">Experience</h1>
//             <p className="mt-4 text-lg text-black">💻 <strong>11+ Months</strong> of Professional Experience</p>
//           </div>

//           <div className="flex flex-col items-center text-center px-10 py-6 rounded-xl border-2 border-gray-300 shadow-lg">
//             <h1 className="text-black text-3xl font-bold">Projects</h1>
//             <p className="mt-4 text-lg text-black">🚀 <strong>3+ Projects</strong> Successfully Completed</p>
//           </div>

//           <div>
//             <img src="/1740116787673.jpg" alt="Profile" className="h-[300px] rounded-full shadow-lg" />
//           </div>
//         </div>

//         <div className="absolute inset-0 flex justify-end pr-20 items-start">
//           <h1
//             className="text-[190px] text-black uppercase font-extrabold opacity-10 pointer-events-none select-none blur-[2px]"
//             style={{ letterSpacing: "-0.11em", whiteSpace: "nowrap" }}
//           >
//             About Me
//           </h1>
//         </div>
//       </section>

//       <section className="relative flex flex-col h-[100px ]  overflow-hidden">
//       <h1 className="text-[190px] text-black uppercase font-extrabold opacity-10 pointer-events-none select-none blur-[2px] mb-10" style={{ letterSpacing: '-0.11em', whiteSpace: 'nowrap' }}>
//         Skills
//       </h1>

//       <SkillsMarquee />
//     </section>




//       <section className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden">
//         <div className="relative z-20 flex w-full px-20 items-center justify-between mt-40">
//           <div className="text-left max-w-xl">
//             <h1 className="text-black text-5xl font-bold">
//               Hi! I'm <span className="text-red-950">JUBIN TAJ</span>
//             </h1>
//             <p className="text-xl text-black mt-4 w-full">
//               A frontend developer passionate about crafting fast, visually stunning websites.
//             </p>

//             <div className="mt-8">
//               <div className="flex items-center space-x-3">
//                 <FaGraduationCap className="text-black text-3xl" />
//                 <h1 className="text-2xl font-bold text-black">Education</h1>
//               </div>
//               <p className="text-lg text-black mt-2">BCA - Present (2025)</p>
//             </div>

//             <div className="mt-6">
//               <div className="flex items-center space-x-3">
//                 <MdWork className="text-black text-3xl" />
//                 <h1 className="text-2xl font-bold text-black">Professional Experience</h1>
//               </div>
//               <h2 className="text-xl text-black font-semibold mt-2">Frontend Developer</h2>
//               <p className="text-lg text-black">
//                 Bridgeon Solution <br />
//                 2024 - Present <br />
//                 - Developed responsive web applications using React <br />
//                 - Implemented state management using Redux and Zustand <br />
//                 - Built performant applications with Next.js
//               </p>
//             </div>
//           </div>

//           <div className="flex flex-col items-center text-center px-10 py-6 rounded-xl border-2 border-gray-300 shadow-lg">
//             <h1 className="text-black text-3xl font-bold">Experience</h1>
//             <p className="mt-4 text-lg text-black">💻 <strong>11+ Months</strong> of Professional Experience</p>
//           </div>

//           <div className="flex flex-col items-center text-center px-10 py-6 rounded-xl border-2 border-gray-300 shadow-lg">
//             <h1 className="text-black text-3xl font-bold">Projects</h1>
//             <p className="mt-4 text-lg text-black">🚀 <strong>3+ Projects</strong> Successfully Completed</p>
//           </div>

//           <div>
//             <img src="/1740116787673.jpg" alt="Profile" className="h-[300px] rounded-full shadow-lg" />
//           </div>
//         </div>

//         <div className="absolute inset-0 flex justify-end pr-20 items-start">
//           <h1
//             className="text-[190px] text-black uppercase font-extrabold opacity-10 pointer-events-none select-none blur-[2px]"
//             style={{ letterSpacing: "-0.11em", whiteSpace: "nowrap" }}
//           >
//             About Me
//           </h1>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Portfolio;
"use client"

import { useEffect, useRef, useState } from "react"
import { FaGraduationCap } from "react-icons/fa"
import { MdWork } from "react-icons/md"
import { Github, Linkedin, Twitter } from "lucide-react"
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SkillsMarquee from "./Skills"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Portfolio() {
  const portfolioRef = useRef(null)
  const [currentTime, setCurrentTime] = useState("")
  const [isLoaded, setIsLoaded] = useState(false)

  // Set loaded state on mount
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // GSAP animation for scrolling text
  useEffect(() => {
    const element = portfolioRef.current
    if (!element) return

    gsap.fromTo(
      element,
      { x: "30%" },
      {
        x: "-100%",
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top 60%",
          end: "+=900",
          scrub: 2,
        },
      },
    )
  }, [])

  // Current time in IST
  useEffect(() => {
    dayjs.extend(utc)
    dayjs.extend(timezone)

    const timer = setInterval(() => {
      const timeInIST = dayjs().tz("Asia/Kolkata").format("hh:mm:ss A")
      setCurrentTime(timeInIST)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full bg-white text-black">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden">
        <div className="relative z-20 flex flex-col items-center space-y-6 mt-72">
          <h1 className="text-5xl md:text-8xl lg:text-[150px] font-bold text-black leading-tight tracking-tight mt-16">
            JUBIN TAJ
          </h1>
          <div
            className={`flex space-x-6 mt-8 transition-all duration-1000 delay-600 transform ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <a href="https://github.com/JUBINTAJ" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Github className="w-6 h-6 text-black" />
            </a>
            <a
              href="https://www.linkedin.com/in/jubin-taj-137383316/"
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Linkedin className="w-6 h-6 text-black" />
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Twitter className="w-6 h-6 text-black" />
            </a>
          </div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-start z-0">
          <div className="flex justify-start absolute top-7 left-7 text-2xl text-black font-mono">{currentTime}</div>

          <h1
            className="text-7xl md:text-9xl lg:text-[190px] text-black uppercase font-extrabold opacity-10 pointer-events-none select-none blur-[4px] mt-10 whitespace-nowrap"
            style={{ letterSpacing: "-0.11em" }}
          >
            FRONT END DEVELOPER
          </h1>
          <p className="max-w-5xl text-center text-black font-extrabold opacity-10 pointer-events-none select-none text-xl leading-relaxed mt-10 px-4">
            I enjoy building fast, visually appealing websites with the latest technologies. I specialize in HTML, CSS,
            JavaScript, React, Redux, Zustand, TypeScript, and Next.js to create smooth, user-friendly web apps that
            perform great across all devices.
          </p>
        </div>
      </section>

      {/* Scrolling Text Section */}
      <section className="w-full py-20">
        <div className="w-full flex justify-center overflow-hidden">
          <h2
            ref={portfolioRef}
            className="text-7xl md:text-9xl lg:text-[280px] font-extrabold text-black uppercase leading-[0.8] whitespace-nowrap"
            style={{ letterSpacing: "-0.10em" }}
          >
            SHOWCASING MY WORK & PASSION
          </h2>
        </div>
      </section>

      {/* About Me Section */}
      <section className="relative flex flex-col items-center justify-center w-full min-h-screen overflow-hidden py-20">
        <div className="relative z-20 flex flex-col lg:flex-row w-full px-6 md:px-10 lg:px-20 items-center justify-between gap-10">
          <div className="text-left max-w-xl">
            <h1 className="text-black text-4xl md:text-5xl font-bold">
              Hi! I'm <span className="text-black">JUBIN TAJ</span>
            </h1>
            <p className="text-xl text-black mt-4 w-full">
              A frontend developer passionate about crafting fast, visually stunning websites.
            </p>

            <div className="mt-8">
              <div className="flex items-center space-x-3">
                <FaGraduationCap className="text-black text-3xl" />
                <h1 className="text-2xl font-bold text-black">Education</h1>
              </div>
              <p className="text-lg text-black mt-2">BCA - Present (2025)</p>
            </div>

            <div className="mt-6">
              <div className="flex items-center space-x-3">
                <MdWork className="text-black text-3xl" />
                <h1 className="text-2xl font-bold text-black">Professional Experience</h1>
              </div>
              <h2 className="text-xl text-black font-semibold mt-2">Frontend Developer</h2>
              <p className="text-lg text-black">
                Bridgeon Solution <br />
                2024 - Present <br />- Developed responsive web applications using React <br />- Implemented state
                management using Redux and Zustand <br />- Built performant applications with Next.js
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row lg:flex-col gap-6 my-10 lg:my-0">
            <div className="flex flex-col items-center text-center px-8 py-6 rounded-xl border-2 border-black shadow-lg">
              <h1 className="text-black text-3xl font-bold">Experience</h1>
              <p className="mt-4 text-lg text-black">
                💻 <strong>11+ Months</strong> of Professional Experience
              </p>
            </div>

            <div className="flex flex-col items-center text-center px-8 py-6 rounded-xl border-2 border-black shadow-lg">
              <h1 className="text-black text-3xl font-bold">Projects</h1>
              <p className="mt-4 text-lg text-black">
                🚀 <strong>3+ Projects</strong> Successfully Completed
              </p>
            </div>
          </div>

          <div className="order-first lg:order-last mb-10 lg:mb-0">
            <img
              src="/placeholder.svg?height=300&width=300"
              alt="Profile"
              className="h-[300px] w-[300px] rounded-full shadow-lg object-cover border-2 border-black"
            />
          </div>
        </div>

        <div className="absolute inset-0 flex justify-end pr-0 md:pr-10 lg:pr-20 items-start">
          <h1
            className="text-7xl md:text-9xl lg:text-[190px] text-black uppercase font-extrabold opacity-10 pointer-events-none select-none blur-[2px]"
            style={{ letterSpacing: "-0.11em", whiteSpace: "nowrap" }}
          >
            About Me
          </h1>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-20 overflow-hidden">
        <h1
          className="text-7xl md:text-9xl lg:text-[190px] text-black uppercase font-extrabold opacity-10 pointer-events-none select-none blur-[2px] mb-10"
          style={{ letterSpacing: "-0.11em", whiteSpace: "nowrap" }}
        >
          Skills
        </h1>

        <SkillsMarquee />
      </section>

      {/* Projects Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-black">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="border-2 border-black p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-3">Project One</h3>
              <p className="text-gray-800 mb-4">A responsive web application built with React and Next.js.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-black text-white rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-black text-white rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-black text-white rounded-full text-sm">Tailwind</span>
              </div>
              <a
                href="#"
                className="inline-block px-4 py-2 border-2 border-black rounded-md font-medium hover:bg-black hover:text-white transition-colors"
              >
                View Project
              </a>
            </div>

            {/* Project Card 2 */}
            <div className="border-2 border-black p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-3">Project Two</h3>
              <p className="text-gray-800 mb-4">An e-commerce platform with state management using Redux.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-black text-white rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-black text-white rounded-full text-sm">Redux</span>
                <span className="px-3 py-1 bg-black text-white rounded-full text-sm">CSS</span>
              </div>
              <a
                href="#"
                className="inline-block px-4 py-2 border-2 border-black rounded-md font-medium hover:bg-black hover:text-white transition-colors"
              >
                View Project
              </a>
            </div>

            {/* Project Card 3 */}
            <div className="border-2 border-black p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-3">Project Three</h3>
              <p className="text-gray-800 mb-4">A dashboard application with data visualization.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-black text-white rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-black text-white rounded-full text-sm">Zustand</span>
                <span className="px-3 py-1 bg-black text-white rounded-full text-sm">Chart.js</span>
              </div>
              <a
                href="#"
                className="inline-block px-4 py-2 border-2 border-black rounded-md font-medium hover:bg-black hover:text-white transition-colors"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-10">Get In Touch</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="text-xl mb-6">
                I'm currently available for freelance work. If you have a project that you want to get started, think
                you need my help with something or just fancy saying hey, then get in touch.
              </p>

              <div className="flex flex-col gap-4">
                <a href="mailto:contact@jubintaj.com" className="text-lg hover:underline">
                  contact@jubintaj.com
                </a>
                <div className="flex gap-4 mt-4">
                  <a
                    href="https://github.com/JUBINTAJ"
                    className="p-2 rounded-full hover:bg-gray-800 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jubin-taj-137383316/"
                    className="p-2 rounded-full hover:bg-gray-800 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="#" className="p-2 rounded-full hover:bg-gray-800 transition-colors">
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="border-2 border-white p-6 rounded-lg">
              <form className="flex flex-col gap-4">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 bg-transparent border-2 border-white rounded-md focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 bg-transparent border-2 border-white rounded-md focus:outline-none"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 bg-transparent border-2 border-white rounded-md focus:outline-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="mt-2 px-6 py-3 bg-white text-black font-bold rounded-md hover:bg-gray-200 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white text-black border-t-2 border-black">
        <div className="container mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} Jubin Taj. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
