import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

function ProductPage() {
  const animationData = require("../../../public/assets/project.json");
  const treasure = require("../../../public/assets/treasure.json");
  const atomarena = require("../../../public/assets/atomarena.json");
  const billion = require("../../../public/assets/billion.json");
  const mia = require("../../../public/assets/mia.json");
  const ooko = require("../../../public/assets/ooko.json");
  const herocar = require("../../../public/assets/herocar.json");
  const myokyalthu = require("../../../public/assets/myokyalthu.json");
  const gens = require("../../../public/assets/gens.json");
  const bandula = require("../../../public/assets/bandula.json");
  const futsal = require("../../../public/assets/futsal.json");
  const wisdom = require("../../../public/assets/wisdom.json");
  const comingsoon = require("../../../public/assets/comingsoon.json");

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div
      className={
        animate
          ? "animate-slide-bounce w-[50%] max-sm:w-full flex flex-col gap-5 px-2"
          : "w-[50%] flex flex-col gap-5 px-2"
      }
    >
      <div className="w-full flex justify-center gap-5 px-20 max-sm:px-5">
        <div>
          <Lottie
            style={{ width: "110px", height: "110px" }}
            animationData={animationData}
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-1 items-center">
            <h3 className="font-teko font-[600] text-[1.3rem]">My Projects,</h3>
            <span className="font-[700] text-sm">A Dev Blog</span>
          </div>
          <div className="text-xs">
            I am learning how to code both the front and back of websites and
            excited to share what I am making and what I am learning along the
            way!
          </div>
        </div>
      </div>
      <hr className="h-[2px] border-none  bg-secondary"></hr>
      <div
        onClick={() => document.getElementById("my_modal_2").showModal()}
        className="w-full h-[32rem] overflow-y-scroll bg-white rounded-lg"
      >
        <div className="w-full flex gap-4 p-4 hover:bg-[#eceff3] duration-200">
          <div className="avatar">
            <div className="w-24 rounded-xl">
              <Lottie
                style={{ width: "110px", height: "110px" }}
                animationData={atomarena}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-bold text-md text-gray-700">
              Atom-Arena Gaming Platform
            </span>
            <span className="font-bold text-xs text-gray-700">
              Tournament Platform for Atom with Laravel Back-end & Next Js
              Front-end
            </span>
          </div>
        </div>
        <div className="w-full flex gap-4 p-4 hover:bg-[#eceff3] duration-200">
          <div className="avatar">
            <div className="w-24 rounded-xl">
              <Lottie
                style={{ width: "110px", height: "110px" }}
                animationData={billion}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-bold text-md text-gray-700">
              100Billion.net
            </span>
            <span className="font-bold text-xs text-gray-700">
              Ecommerce Website with Laravel
            </span>
          </div>
        </div>
        <div className="w-full flex gap-4 p-4 hover:bg-[#eceff3] duration-200">
          <div className="avatar">
            <div className="w-24 rounded-xl">
              <Lottie
                style={{ width: "110px", height: "110px" }}
                animationData={treasure}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-bold text-md text-gray-700">
              Treasure Sea POS
            </span>
            <span className="font-bold text-xs text-gray-700">
              POS and Business Management Website with Laravel
            </span>
          </div>
        </div>
        <div className="w-full flex gap-4 p-4 hover:bg-[#eceff3] duration-200">
          <div className="avatar">
            <div className="w-24 rounded-xl">
              <Lottie
                style={{ width: "110px", height: "110px" }}
                animationData={mia}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-bold text-md text-gray-700">Mia Indo</span>
            <span className="font-bold text-xs text-gray-700">
              Ecommerce Admin Dashboard & Mobile API with Laravel
            </span>
          </div>
        </div>
        <div className="w-full flex gap-4 p-4 hover:bg-[#eceff3] duration-200">
          <div className="avatar">
            <div className="w-24 rounded-xl">
              <Lottie
                style={{ width: "110px", height: "110px" }}
                animationData={ooko}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-bold text-md text-gray-700">Oo Ko LMS</span>
            <span className="font-bold text-xs text-gray-700">
              Learning Manage System Admin Dashboard & Mobile API with Laravel
            </span>
          </div>
        </div>
        <div className="w-full flex gap-4 p-4 hover:bg-[#eceff3] duration-200">
          <div className="avatar">
            <div className="w-24 rounded-xl">
              <Lottie
                style={{ width: "110px", height: "110px" }}
                animationData={herocar}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-bold text-md text-gray-700">
              Hero Car Spa & Service
            </span>
            <span className="font-bold text-xs text-gray-700">
              POS Website with Laravel
            </span>
          </div>
        </div>
        <div className="w-full flex gap-4 p-4 hover:bg-[#eceff3] duration-200">
          <div className="avatar">
            <div className="w-24 rounded-xl">
              <Lottie
                style={{ width: "110px", height: "110px" }}
                animationData={myokyalthu}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-bold text-md text-gray-700">
              Myo Kyal Thu Book Store
            </span>
            <span className="font-bold text-xs text-gray-700">
              Ecommerce Admin Panel & Mobile API with Laravel
            </span>
          </div>
        </div>
        <div className="w-full flex gap-4 p-4 hover:bg-[#eceff3] duration-200">
          <div className="avatar">
            <div className="w-24 rounded-xl">
              <Lottie
                style={{ width: "110px", height: "110px" }}
                animationData={gens}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-bold text-md text-gray-700">
              Billion Gens
            </span>
            <span className="font-bold text-xs text-gray-700">
              Ecommerce Admin Panel & Mobile API with Laravel
            </span>
          </div>
        </div>
        <div className="w-full flex gap-4 p-4 hover:bg-[#eceff3] duration-200">
          <div className="avatar">
            <div className="w-24 rounded-xl">
              <Lottie
                style={{ width: "110px", height: "110px" }}
                animationData={bandula}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-bold text-md text-gray-700">
              Bandula Mobile
            </span>
            <span className="font-bold text-xs text-gray-700">
              Ecommerce Admin Panel & Mobile API with Laravel
            </span>
          </div>
        </div>
        <div className="w-full flex gap-4 p-4 hover:bg-[#eceff3] duration-200">
          <div className="avatar">
            <div className="w-24 rounded-xl">
              <Lottie
                style={{ width: "110px", height: "110px" }}
                animationData={futsal}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-bold text-md text-gray-700">
              Futsal Stadium
            </span>
            <span className="font-bold text-xs text-gray-700">
              Admin Panel & Mobile API with Laravel
            </span>
          </div>
        </div>
        <div className="w-full flex gap-4 p-4 hover:bg-[#eceff3] duration-200">
          <div className="avatar">
            <div className="w-24 rounded-xl">
              <Lottie
                style={{ width: "110px", height: "110px" }}
                animationData={wisdom}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-bold text-md text-gray-700">Wisdom LMS</span>
            <span className="font-bold text-xs text-gray-700">
              Learning Manage System Admin Dashboard & Mobile API with Laravel
            </span>
          </div>
        </div>
      </div>
      <div className="w-full bg-white rounded-lg h-[4rem] flex items-center justify-center gap-1 hover:bg-[#eceff3]">
        <span className="text-lg max-sm:text-sm">🤝</span>
        <h5 className="font-bold text-sm max-sm:text-xs text-gray-700">
          Thanks for visiting, Hope to work with you very soon!
        </h5>
      </div>

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <Lottie
            style={{ width: "100%", height: "100%" }}
            animationData={comingsoon}
          />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

export default ProductPage;
