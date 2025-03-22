import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/About", label: "About" },
  { path: "/Skills", label: "Skills" },
  { path: "/Contact", label: "Contact" },
];

const Menu = () => {
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tl = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    gsap.set(".menu-link-item-holder", { y: 75 });
  
    tl.current = gsap
      .timeline({ paused: true })
      .to(".menu-overlay", {
        duration: 0.7,
        clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
        ease: "power4.inOut",
      })
      .to(
        ".menu-link-item-holder",
        {
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.inOut",
        },
        0 
      );
  }, []);
  

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  return (
    <div className="relative" ref={container}>
      <div className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-50">
        <div className="text-white text-xl font-semibold">
          <Link to="/">Codegrid</Link>
        </div>
        <div
          className="bg-[#c5fb45] text-white px-4 py-2 rounded-md cursor-pointer text-xl hover:bg-green-400 transition-colors"
          onClick={toggleMenu}
        >
          Menu
        </div>
      </div>

      <div className="menu-overlay fixed top-0 left-0 w-full h-full p-8 bg-[#c5fb45] flex flex-col clip-path-polygon-closed z-40">
        <div className="flex justify-end cursor-pointer mb-8" onClick={toggleMenu}>
          <p className="text-[80px] text-black leading-none">&#x2715;</p>
        </div>

        <div className="flex-1 flex flex-col  justify-center items-start gap-6">
          {menuLinks.map((link, index) => (
            <div className="menu-link-item-holder relative" key={index} onClick={toggleMenu}>
              <Link
                to={link.path}
                className="text-black text-[60px] font-bold hover:text-white transition-colors duration-300"
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-12 flex-wrap gap-6">
          <div className="flex flex-col text-red-500 gap-2">
            <a href="#" className="hover:underline">Instagram &#8599;</a>
            <a href="#" className="hover:underline">LinkedIn &#8599;</a>
            <a href="#" className="hover:underline">Github &#8599;</a>
          </div>
          <div className="flex flex-col text-red-500 gap-2">
            <p>jubintajj@gmail.com</p>
            <p>+91 8590959856</p>
          </div>
        </div>

        <div className="flex justify-end mt-8">
          <p className="text-red-500 hover:underline cursor-pointer">View Showreel</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
