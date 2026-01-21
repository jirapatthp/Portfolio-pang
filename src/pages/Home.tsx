import GithubLogo from "../assets/github.svg";
import ContactLogo from "../assets/contact.svg";
import LinkinLogo from "../assets/Linkin.svg";
import MusicLogo from "../assets/music.svg";
import BlogLogo from "../assets/blog.svg";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import CursorDot from "../assets/dot.png";
import { useNavigate } from "react-router-dom";

import { menuItems } from "../config/menu";
import { useEffect } from "react";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const handleClick = () => {
    setIsPlaying((prev) => !prev);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      style={{ cursor: `url(${CursorDot}), auto` }}
      className="font-rasal grid grid-cols-3 gap-14 h-screen overflow-hidden
             bg-[url('/src/assets/bg.svg')] bg-cover bg-center"
    >
      <div>
        <div className="flex flex-col items-end justify-evenly gap-50 pt-20">
          <div className="text-center  animate-shake">
            <img
              src={ContactLogo}
              alt=""
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/14A90fQMVvkctwtlOYTqH8T0iaPbyUpsa/view?usp=sharing",
                  "_blank",
                )
              }
              className="w-40 h-40 hover:scale-[1.1] duration-300"
            />
            <span className="text-3xl font-bold  bg-[url('https://i.pinimg.com/736x/48/66/08/48660831b6bedf3e1e1b6103409197b0.jpg')] bg-blur-sm rounded-full">
              resume
            </span>
          </div>
          <div className="text-center animate-shake">
            <img
              src={GithubLogo}
              alt=""
              onClick={() =>
                window.open("https://github.com/jirapatthp", "_blank")
              }
              className="w-40 h-40 hover:scale-[1.1] duration-300"
            />
            <span className="text-3xl font-bold  bg-[url('https://i.pinimg.com/1200x/24/05/5f/24055f957d15bc1868e03d078ec6fbe4.jpg')] bg-blur-sm rounded-full">
              github
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-40 ">
        <div className="text-center  animate-shake">
          <img
            src={LinkinLogo}
            alt=""
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/jirapat-thepsurin-52245938a/",
                "_blank",
              )
            }
            className="w-50 h-40 mt-20 hover:scale-[1.1] duration-300"
          />
          <span className="text-3xl font-bold  bg-[url('https://i.pinimg.com/736x/4d/c5/04/4dc5049da6ec5881c934f9f34003acba.jpg')] bg-blur-sm rounded-full">
            Linkin
          </span>
        </div>
        <div>
          <img
            src={MusicLogo}
            alt="Play Music"
            onClick={handleClick}
            className="h-80 mt-20 hover:scale-[1.1] duration-300"
          />

          {isPlaying && (
            <iframe
              width="0"
              height="0"
              src="https://www.youtube.com/embed/VOmIplFAGeg?autoplay=1&loop=1&playlist=VOmIplFAGeg&controls=0"
              title="YouTube Player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
            ></iframe>
          )}
        </div>
      </div>
      <div className=" flex justify-end">
        <img
          src={BlogLogo}
          alt=""
          onClick={toggleSidebar}
          className="h-40 hover:scale-[1.1] duration-300 animate-shake hover:cursor-pointer"
        />

        {/* 💫 แสดง sidebar เมื่อเปิด */}
        <AnimatePresence>
          {isOpen && (
            <>
              <div
                className="fixed inset-0 bg-white/20 "
                onClick={toggleSidebar}
              ></div>

              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 80, damping: 12 }}
                className="fixed top-0 right-0 h-full w-100 bg-[url('https://i.pinimg.com/736x/d2/9e/a5/d29ea58777cedeff3e4349a723db1b54.jpg')] shadow-lg p-6 z-50 flex flex-col justify-center"
              >
                <ul
                  className="font-bold text-3xl flex flex-col
             items-center gap-30"
                >
                  {menuItems.map((item) => (
                    <li
                      key={item.path}
                      className="hover:scale-[1.1] duration-300 cursor-pointer"
                      onClick={() => {
                        navigate(item.path);
                        setIsOpen(false); // 👈 ปิด sidebar หลังคลิก
                      }}
                    >
                      {item.label}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Home;
