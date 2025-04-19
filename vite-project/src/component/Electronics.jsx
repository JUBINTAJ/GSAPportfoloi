import { Github } from 'lucide-react';
import React from 'react';

function Electronics() {
  return (
    <div className="w-full h-screen bg-black flex flex-col justify-between overflow-hidden relative px-20 py-10">
      <div className="w-full flex justify-center -ml-70 items-center px-20">
  <h1
          className="text-[#F7FCFE] text-[10vw] leading-[1] tracking-tight uppercase font-extrabold origin-center scale-y-[0.8] scale-x-[0.4] whitespace-nowrap"
          style={{
      fontFamily: "'Anton', sans-serif",
      letterSpacing: '-0.09em',
    }}
  >
    REFURBISHABLE ELECTRONICS
  </h1>
</div>

      <div className="flex items-start justify-between mb-20 gap-x-10 leading-loose tracking-wider italic font-extrabold uppercase">
        <div className="max-w-[40%] mb-20">
          <div className="flex items-center space-x-4 mb-4">
            <h2 className="text-3xl font-extrabold uppercase text-white">Third Project</h2>
            <a
              href="https://github.com/JUBINTAJ/QyrenxFrontend"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors duration-200 "
            >
              <Github size={28} />
            </a>
          </div>
          <p className="text-gray-400">
            Refurbishable Electronics is an e-commerce platform designed for buying and selling pre-owned, certified refurbished electronics. The platform allows users to browse a wide range of products including smartphones, laptops, and accessories, all of which undergo quality checks before listing. With a focus on sustainability and affordability, the site promotes reuse through a seamless, secure shopping experience.
          </p>
          <div className="mt-20">
            <img
            //   src="/HubStar-digital_workspaces.jpeg"
              alt="baby shop"
              className="h-[300px] w-[800px] object-cover rounded-xl"
            />
          </div>
        </div>

        <div className="flex-shrink-0 -mt-30">
          <img
            // src="/a-side-view-from-a-computer-desk-in-a-modern-corporate-office-vertical-mobile-wallpaper-ai-generated-free-photo.jpg"
            alt="second"
            className="h-[800px] w-[500px] object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Electronics;
