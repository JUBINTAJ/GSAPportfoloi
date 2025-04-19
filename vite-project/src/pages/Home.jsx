import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGraduationCap } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import Skills from './Skills';
import { Code2, Github, Linkedin, Twitter } from 'lucide-react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

import Main from '../component/Main';
import Indro from '../component/indro'
import About from '../component/About';
import Work from '../component/Work';
import Contact from '../component/Contact';
import Thanku from '../component/Thanku';
import Project from '../component/Project';
import Proj from '../component/Proj';
import Second from '../component/Second';
import Electronics from '../component/Electronics';



gsap.registerPlugin(ScrollTrigger);

function Portfolio() {
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








  return (
    <div className="w-full bg-black text-white">

      
      <section className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden ">
    <Main/>
    
      </section>
      <section className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden ">
    <Indro/>
      </section>
      <section className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden ">
    <About/>
      </section>
      <section className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden ">
    <Work/>
      </section>
      <section className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden ">
    <Project/>
      </section>
      <section className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden ">
    <Proj/>
      </section>
      <section className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden ">
    <Second/>
      </section>
      
      <section className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden ">
    <Electronics/>
      </section>
      <section className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden ">
    <Contact/>
      </section>
      <section className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden ">
    <Thanku/>
      </section>

    </div>
  );
}

export default Portfolio;
