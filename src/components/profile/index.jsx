import Link from "next/link";
import React, { useEffect, useState } from "react";

function ProfilePage() {
  const [copied, setCopied] = useState(false);

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const copyToClipboard = () => {
    const email = "aungkaungmyatpaing.coder@gmail.com";
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000); // Reset copied state after 3 seconds
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/aungkaungmyatpaing.pdf"; // Path to the file in the public folder
    link.download = "aungkaungmyatpaing.pdf"; // The name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className={
        animate
          ? "animate-slide-bounce w-[25%] max-sm:w-full h-auto flex flex-col gap-10 bg-white p-3 rounded-xl"
          : "w-[25%] h-auto flex flex-col gap-10 bg-white p-3 rounded-xl"
      }
    >
      <div className="w-full flex flex-col gap-3 pl-2">
        <div className="w-full flex justify-between">
          <div className="avatar online">
            <div className="w-24 rounded-full">
              <img src="/assets/me.png" />
            </div>
          </div>
          <div className="w-[1.6rem] h-[1.6rem] flex justify-center items-center rounded-full bg-gray-300">
            <i className="fa-solid fa-sun-bright text-gray-600"></i>
          </div>
        </div>
        <div className="w-full flex flex-col gap-1">
          <h3 className="font-teko font-[600] text-[1.3rem]">
            Aung Kaung Myat Paing
          </h3>
          <div className="w-full font-bold flex gap-1 items-center text-sm">
            <i className="fa-regular fa-envelope"></i>
            <span className="text-[0.7rem]">
              {copied ? "copied" : "aungkaungmyatpaing.coder@gmail.com"}
            </span>
            <i
              className="fa-regular fa-copy ml-2"
              onClick={copyToClipboard}
            ></i>
          </div>
          <div className="w-full font-bold flex gap-1 items-center text-sm">
            <i className="fa-regular fa-mobile"></i>
            <span className="text-[0.7rem]">+959-760-575-696</span>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-full font-teko flex gap-2">
            <div className="badge badge-secondary rounded-sm">PHP</div>
            <div className="badge badge-secondary rounded-sm">Laravel</div>
            <div className="badge badge-secondary rounded-sm">Js</div>
            <div className="badge badge-secondary rounded-sm">Next Js</div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-3">
        <h3 className="font-teko font-[600] text-[1.3rem]">Bio</h3>
        <div className="w-full flex gap-2">
          <i class="fa-solid fa-plus text-[0.6rem] mt-1"></i>
          <p className="text-[0.7rem]">
            I am a web developer who is excited about learning and taking on
            challenges.
          </p>
        </div>
        <div className="w-full flex gap-2">
          <i class="fa-solid fa-plus text-[0.6rem] mt-1"></i>
          <p className="text-[0.7rem]">
            I am passionate about both fornt-end, back-end and game development.
          </p>
        </div>
        <div className="w-full flex gap-2">
          <i class="fa-solid fa-plus text-[0.6rem] mt-1"></i>
          <p className="text-[0.7rem]">
            I am ready for new opportunities and contribute my skill for yah.
          </p>
        </div>
        <div className="w-full flex gap-5 mt-2">
          <Link
            href={
              "https://drive.google.com/file/d/1MaqS8pFaoYWBnCswTfx1fwugevbBKczh/view"
            }
            target="_blank"
            className="w-[5rem] h-[1.5rem] flex justify-center items-center bg-secondary text-[0.6rem] font-bold rounded-sm"
          >
            View
          </Link>

          <div
            className="w-[5rem] h-[1.5rem] flex justify-center items-center bg-secondary text-[0.6rem] font-bold rounded-sm"
            onClick={handleDownload}
          >
            Download
          </div>
        </div>
        <hr className="h-[2px] border-none  bg-secondary mt-3"></hr>
      </div>

      <div className="w-full flex flex-col gap-3">
        <div className="flex w-full justify-between items-center">
          <h3 className="font-teko font-[600] text-[1.3rem]">Location</h3>
          <span className="text-xs font-bold opacity-60">Bahan Tsp</span>
        </div>
        <div className="w-full border-gray-200 rounded-lg  border-[2px] overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3987.8368902315874!2d96.16063873472069!3d16.811250493349515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smm!4v1718301794592!5m2!1sen!2smm"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
