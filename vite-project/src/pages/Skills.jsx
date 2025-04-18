// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function VideoScrollEffect() {
//   const containerRef = useRef(null);
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     const video = videoRef.current;

//     gsap.fromTo(
//       video,
//       { width: "40%", height: "40%" },
//       {
//         width: "100%",
//         height: "100%",
//         duration: 2,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: container,
//           start: "top top",
//           end: "bottom center",
//           scrub: 4,
//           pin: true,
//         },
//       }
//     );

//     return () => {
//       ScrollTrigger.getAll().forEach((st) => st.kill());
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="h-screen flex items-center justify-center overflow-hidden bg-white"
//     >
//       <video
//         ref={videoRef}
//         src="/public\5527786-uhd_3840_2160_25fps.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="object-cover w-full h-full"
//       />
//     </div>
//   );
// }

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const SkillsMarquee = () => {
//   const containerRef = useRef(null);
//   const trackRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     const track = trackRef.current;

//     if (!container || !track) return;

//     const totalWidth = track.scrollWidth;
//     const containerWidth = container.offsetWidth;
//     const scrollDistance = totalWidth - containerWidth;
//     const scrollDuration = window.innerHeight * 2;

//     gsap.to(track, {
//       x: -scrollDistance,
//       ease: "none",
//       scrollTrigger: {
//         trigger: container,
//         start: "top top",
//         end: `+${scrollDuration}`,
//         scrub: 2,
//         pin: true,
//         anticipatePin: 1,
//       },
//     });
//   }, []);
  

//   const skills = [
//     "HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "Redux", "React query", "Zustand",
//     "MongoDB", "Express js", "Node js", "Figma", "GSAP", "Framer Motion", "GitHub", "Axios",
//     "Tailwind Css", "Bootstrap", "Materal UI", "PWA", "JWT", "Rest API", "Multer", "Postman"
//   ];

//   return (
//     <div ref={containerRef} className="relative w-full h-screen bg-white overflow-hidden">
//       {/* Green Box with Images inside */}

//       <div
//         ref={trackRef}
//         className="absolute top-1/2 -translate-y-1/2 left-0 flex space-x-8 text-[100px] md:text-[140px] xl:text-[170px] font-bold whitespace-nowrap uppercase px-10 z-10"
//       >
//         {skills.map((skill, i) => (
//           <span key={i} className="text-[#A67EFF] drop-shadow-lg">{skill} • </span>
//         ))}
//       </div>



//       <div className="absolute inset-0 z-0 flex justify-center items-center bg-gradient-to-br from-[#ffffff] to-[#fce4ec]">
//   <div className="w-[1100px] h-[800px] rounded-[32px] relative z-10 shadow-2xl border-4 border-[#d1eec9] bg-[#f9f9f9]/80 backdrop-blur-md flex items-start pt-12 px-6 overflow-hidden scrollb">
//     <div className="flex flex-wrap gap-6 justify-center w-full">
//       {[
//         "/1_LvA59wJi3O9jTMQQsw_cRA.png",
//         "/5c4670d1a27aef4e7084d0806af65dac.png",
//         "/6024bc5746d7436c727825dc4fc23c22-html-programming-language-icon-by-vexels.webp",
//         "/css3-logo-png-transparent.png",
//         "/image_processing20210620-25815-118h3kn.png",
//         "/javascript-logo-javascript-icon-transparent-free-png.webp",
//         "/mongodb-original-wordmark-icon-505x512-q86sq243.png",
//         "/no6273n057-node-js-logo-nodejs-transparent-logo-google-search.png",
//         "/React-icon.svg.png",
//         "/redux_original_logo_icon_146365.webp",
//         "/Skj0l__react-query-icon.svg",
//         "/typescript-icon-icon-1024x1024-vh3pfez8.png",
//         "/zustand-react-small.png"
//       ].map((src, idx) => (
//         <div
//           key={idx}
//           className="w-[240px] h-[120px] bg-white rounded-[24px] shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center justify-center p-4 border border-[#e0e0e0]"
//         >
//           <img
//             src={src}
//             alt={`tech-${idx}`}
//             className="max-w-full max-h-full object-contain rounded-xl drop-shadow-md"
//           />
//         </div>
//       ))}
//     </div>
//   </div>
// </div>


//     </div>
//   );
// };

// export default SkillsMarquee;




"use client"
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiGit,
  SiGithub,
  SiNodedotjs,
  SiSass,
} from "react-icons/si"

export default function SkillsMarquee() {
  const skills = [
    { name: "HTML5", icon: SiHtml5 },
    { name: "CSS3", icon: SiCss3 },
    { name: "JavaScript", icon: SiJavascript },
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Redux", icon: SiRedux },
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Sass", icon: SiSass },
  ]

  return (
    <div className="w-full overflow-hidden py-20">
      <div className="flex gap-10 animate-marquee">
        {skills.concat(skills).map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center min-w-[150px] h-[150px] border-2 border-black rounded-lg p-4"
          >
            <skill.icon className="w-12 h-12 mb-2" />
            <span className="text-lg font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
