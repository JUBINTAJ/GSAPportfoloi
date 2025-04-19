import { Github } from 'lucide-react';
import React from 'react';

function Second() {
  return (
    <div className="w-full h-screen bg-black flex flex-col justify-between overflow-hidden relative">


      <div className="flex flex-grow items-center justify-between px-20 mb-20">
        <div className="flex-1 flex justify-center -ml-[600px]">
          <h1
            className="text-[#F7FCFE] text-[14vw] leading-[1] tracking-tight uppercase font-extrabold origin-center scale-y-[0.8] scale-x-[0.4] whitespace-nowrap text-center"
            style={{
              fontFamily: "'Anton', sans-serif",
              letterSpacing: '-0.09em',
            }}
          >
            THREAD -<br />
            CLONE
          </h1>
        </div>

        <div className="-mb-10">
          <img
            // src="/public\Instagram-Threads-app-for-Windows-11.jpg "
            alt="baby shop"
            className="h-[350px] w-auto object-cover rounded-xl border-2"
          />
        </div>
      </div>

      <div className="flex items-center justify-between px-20  text-[#F7FCFE] text-lg leading-loose tracking-wider italic font-extrabold uppercase -mt-20 gap-x-10">
        <img
        //   src="/threads-app-logo.jpeg"
          alt="baby shop"
          className="h-[300px] w-[700px] object-cover rounded-xl"
        />
        <div className="max-w-[40%]">
               <div className='flex space-x-7 '>
                  <h2 className="text-3xl font-extrabold uppercase mb-4">SECOND PROJECT </h2>
                  <a
                href="https://github.com/JUBINTAJ/thread-clone"
                target="_blank"
                rel="noopener noreferrer"
                className=" top-6 right-6 text-white hover:text-gray-400 transition-colors duration-200"
              >
                <Github size={32} />
              </a>
                  
                    </div>
          <p className='text-gray-400'>
            Thread App is a social media application designed to mimic the features and functionality of the popular "Threads" app. It allows users to post short text updates, interact with posts through comments and likes, and follow other users. The app is built with a focus on real-time communication, user-friendly design, and seamless performance. With features like a personalized feed and notifications, the "Thread App" offers a streamlined social experience for sharing thoughts and engaging with others.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Second;
