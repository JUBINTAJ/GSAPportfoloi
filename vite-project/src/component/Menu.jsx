import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link, useLocation } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaGithub, FaPlayCircle } from "react-icons/fa";

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
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
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

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="relative" ref={container}>
      <div className="fixed top-0 left-0 w-full p-6 flex justify-end items-center z-50">
        {!isMenuOpen && (
          <button
            onClick={toggleMenu}
            className="bg-white text-black px-6 py-3 rounded-full text-lg shadow-md hover:bg-red-500 hover:text-white transition-all"
          >
            Menu
          </button>
        )}
      </div>

      <div className="menu-overlay fixed top-0 left-0 w-full h-full p-10 bg-red-600 flex flex-col justify-between clip-path-polygon-closed z-40">
        <div className="flex justify-between items-center mb-12">
          <Link to="/" className="text-white text-2xl font-bold tracking-wide">
            PORTFOLIO
          </Link>
          <button onClick={toggleMenu} className="text-white text-[50px] leading-none">
            &times;
          </button>
        </div>

        <div className="flex flex-col justify-center items-center gap-8">
          {menuLinks.map((link, index) => (
            <div className="menu-link-item-holder" key={index}>
              <Link
                to={link.path}
                className="text-white text-[45px] font-extrabold hover:text-black transition duration-300"
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-between w-full items-end mt-12">
          <div className="flex flex-col gap-4 text-white">
            <a
              href="#"
              className="flex items-center gap-3 hover:text-black transition-all duration-300"
            >
              <FaInstagram size={22} /> Instagram
            </a>
            <a
              href="#"
              className="flex items-center gap-3 hover:text-black transition-all duration-300"
            >
              <FaLinkedin size={22} /> LinkedIn
            </a>
            <a
              href="#"
              className="flex items-center gap-3 hover:text-black transition-all duration-300"
            >
              <FaGithub size={22} /> Github
            </a>
          </div>

          <div className="flex flex-col text-white gap-2">
            <p className="hover:text-black transition-all duration-300">
              jubintajj@gmail.com
            </p>
            <p className="hover:text-black transition-all duration-300">
              +91 8590959856
            </p>
          </div>

          <div className="flex items-center gap-3 text-white hover:text-black transition-all duration-300 cursor-pointer">
            <FaPlayCircle size={28} />
            <p className="font-semibold">View Showreel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
