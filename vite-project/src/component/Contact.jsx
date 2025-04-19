import React, { useEffect } from 'react';
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import gsap from 'gsap';

function Contact() {
  useEffect(() => {
    const main = document.querySelector('#main-contact');
    const cursor = document.querySelector('#contact-cursor');
    const hoverElements = document.querySelectorAll('[data-cursor]');

    if (!main || !cursor) return;

    const moveHandler = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power2.out',
        backgroundColor: 'transparent',

      });
    };

    const mouseEnterHandler = (e) => {
      const type = e.currentTarget.getAttribute('data-cursor');
      switch(type) {
        case 'phone':
          cursor.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="white" height="40" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.84 21 3 13.16 3 3a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2z"/></svg>`;
          break;
        case 'email':
          cursor.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="white" height="40" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`;
          break;
        case 'link':
          cursor.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="white" height="40" viewBox="0 0 24 24"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>`;
          break;
        default:
          cursor.innerHTML = '';
      }
      gsap.to(cursor, {
        scale: 3,
        backgroundColor: 'transparent',
        duration: 0.3,
      });
    };

    const mouseLeaveHandler = () => {
      cursor.innerHTML = '';
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: '#7f1d1d',
        duration: 0.3,
      });
    };

    main.addEventListener('mousemove', moveHandler);
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', mouseEnterHandler);
      el.addEventListener('mouseleave', mouseLeaveHandler);
    });

    return () => {
      main.removeEventListener('mousemove', moveHandler);
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', mouseEnterHandler);
        el.removeEventListener('mouseleave', mouseLeaveHandler);
      });
    };
  }, []);

  return (
    <div id="main-contact" className="w-full h-screen bg-black flex flex-col overflow-hidden relative">
      <div
        id="contact-cursor"
        className="cursor h-20 w-20  rounded-full absolute pointer-events-none flex items-center justify-center text-white text-xl"
        style={{ transform: 'translate(-50%, -50%)' }}
      ></div>

      <div className="flex items-start justify-start mt-10 ml-20">
        <h1 className="text-[#F7FCFE] text-[17vw] leading-[1] tracking-tight uppercase font-extrabold origin-top-left scale-y-[0.8] scale-x-[0.4] whitespace-nowrap"
          style={{
            fontFamily: "'Anton', sans-serif",
            letterSpacing: '-0.09em',
          }}
        >
          CONTACT ME
        </h1>
      </div>

      <div className="flex justify-end mr-30 mt-6">
        <div className="grid grid-cols-2 gap-x-16 gap-y-10 text-[#F7FCFE] text-right">
          <div className="flex flex-col items-end space-y-2" data-cursor="phone">
            <h2 className="text-base leading-loose tracking-wider italic font-extrabold uppercase">
              Phone Number
            </h2>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">+91 85909 59856</span>
            </div>
          </div>

          <div className="flex flex-col items-end space-y-2" data-cursor="email">
            <h2 className="text-base leading-loose tracking-wider italic font-extrabold uppercase">
              Email Address
            </h2>
            <a href="mailto:jubintajj@gmail.com" className="flex items-center space-x-3 hover:text-cyan-300 transition-colors duration-200">
              <span className="text-2xl">jubintajj@gmail.com</span>
            </a>
          </div>

          <div className="flex flex-col items-end space-y-2" data-cursor="link">
            <a href="https://github.com/JUBINTAJ" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-cyan-300 transition-colors duration-200">
              <span className="text-2xl leading-loose tracking-wider italic font-extrabold uppercase">
                GitHub
              </span>
              <FaGithub className="text-3xl" />
            </a>
          </div>

          <div className="flex flex-col items-end space-y-2" data-cursor="link">
            <a href="https://www.linkedin.com/in/jubin-taj-137383316/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-cyan-300 transition-colors duration-200">
              <span className="text-2xl leading-loose tracking-wider italic font-extrabold uppercase">
                LinkedIn
              </span>
              <FaLinkedin className="text-3xl" />
            </a>
          </div>

          <div className="flex flex-col items-center space-y-2 col-span-2" data-cursor="link">
            <h2 className="text-base leading-loose tracking-wider italic font-extrabold uppercase">
              Location
            </h2>
            <a href="https://www.google.com/maps/place/Malappuram,+Kerala" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-cyan-300 transition-colors duration-200">
              <span className="text-2xl">Malappuram, Kerala, India</span>
              <MdLocationOn className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;