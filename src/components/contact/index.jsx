import Lottie from "lottie-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function ContactPage() {
  const [animate, setAnimate] = useState(false);
  const ender = require("../../../public/assets/ender.json");

  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <div
      className={
        animate
          ? "animate-slide-bounce w-[25%] h-auto flex flex-col gap-5 bg-white p-3 rounded-xl"
          : "w-[25%] h-auto flex flex-col gap-10 bg-white p-3 rounded-xl"
      }
    >
      <div className="w-full flex flex-col gap-4">
        <h3 className="font-teko font-[600] text-[1.3rem]">Education</h3>
        <div className="w-full flex flex-col px-2 border-[1px] border-[#eceff3] rounded-lg">
          <div className="w-full p-5 flex gap-10 text-gray-600">
            <span className="font-teko">2016 - 2017</span>
            <span className="font-teko">Completed high school</span>
          </div>
          <hr className="h-[2px] border-none bg-[#eceff3]" />
          <div className="w-full p-5 flex gap-6 text-gray-600">
            <span className="font-teko">2023 - Present</span>
            <span className="font-teko">University Of People</span>
          </div>
        </div>
      </div>
      <hr className="h-[2px] border-none bg-[#eceff3]" />
      <div className="w-full flex flex-col gap-4">
        <h3 className="font-teko font-[600] text-[1.3rem]">Skill</h3>
        <div className="w-full flex justify-around text-[1.6rem] text-gray-600 items-center">
          <i className="fa-brands fa-php"></i>
          <i className="fa-brands fa-laravel"></i>
          <i className="fa-brands fa-js"></i>
          <i className="fa-brands fa-react"></i>
        </div>
        <hr className="h-[2px] border-none bg-[#eceff3]" />
      </div>
      <div className="w-full flex flex-col gap-4">
        <h3 className="font-teko font-[600] text-[1.3rem]">Socials</h3>
        <div className="w-full flex justify-around text-[1.6rem] text-gray-600 items-center">
          <i className="fa-brands fa-viber"></i>
          <Link href="https://t.me/aungkaungmyatpaing/" target="_blank">
            <i className="fa-brands fa-telegram"></i>
          </Link>

          <Link
            href="https://www.linkedin.com/in/aung-kaung-myat-paing-486748267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </Link>
          <Link href="https://github.com/aungkaungmyatpaing" target="_blank">
            <i className="fa-brands fa-github"></i>
          </Link>
        </div>
      </div>
      <div className="w-full">
        <Lottie
          style={{ width: "100%", height: "100%" }}
          animationData={ender}
        />
      </div>
    </div>
  );
}

export default ContactPage;
