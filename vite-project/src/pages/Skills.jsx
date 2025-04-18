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

import { useEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const SkillsMarquee = () => {
  const containerRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const track = trackRef.current

    if (!container || !track) return

    const totalWidth = track.scrollWidth
    const containerWidth = container.offsetWidth
    const scrollDistance = totalWidth - containerWidth
    const scrollDuration = window.innerHeight * 2

    gsap.to(track, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: `-=${scrollDuration}`,
        scrub: 2,
        pin: true,
        anticipatePin: 1,
      },
    })
  }, [])

  const images = [
    "/1_LvA59wJi3O9jTMQQsw_cRA.png",
    "/5c4670d1a27aef4e7084d0806af65dac.png",
    "/6024bc5746d7436c727825dc4fc23c22-html-programming-language-icon-by-vexels.webp",
    "/css3-logo-png-transparent.png",
    "/image_processing20210620-25815-118h3kn.png",
    "/javascript-logo-javascript-icon-transparent-free-png.webp",
    "/mongodb-original-wordmark-icon-505x512-q86sq243.png",
    "/no6273n057-node-js-logo-nodejs-transparent-logo-google-search.png",
    "/React-icon.svg.png",
    "/redux_original_logo_icon_146365.webp",
    "/Skj0l__react-query-icon.svg",
    "/typescript-icon-icon-1024x1024-vh3pfez8.png",
    "/zustand-react-small.png",
    "/tailwindcss-icon.svg",
    "/nextjs-icon.svg",
    "/graphql-icon.svg",
    "/docker-icon.svg",
    "/aws-icon.svg",
    "/firebase-icon.svg",
    "/prisma-icon.svg",
    "/vercel-icon.svg",
  ]

  return (
    <div ref={containerRef} className="relative w-full h-[400px] bg-white overflow-hidden ">
      <div
        ref={trackRef}
        className="absolute inset-0 z-0 flex flex-row items-center gap-6 px-10 bg-gradient-to-r w-max"
      >
        {images.map((src, idx) => (
          <div
            key={idx}
            className="w-[400px] h-[200px] bg-white rounded-[10px] shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
          >
            <img src={src || "/placeholder.svg"} alt={`tech-${idx}`} className="w-full h-full object-contain p-4" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillsMarquee
