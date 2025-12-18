import GithubLogo from "../assets/github.svg";
import ContactLogo from "../assets/contact.svg";
import LinkinLogo from "../assets/Linkin.svg";
import MusicLogo from "../assets/music.svg";
import BlogLogo from "../assets/blog.svg";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const handleClick = () => {
    setIsPlaying(true);
    setIsPlaying(!isPlaying);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="grid grid-cols-3 gap-14 min-h-screen bg-[url('/src/assets/bg.svg')] bg-cover bg-center">
      <div>
        <div className="flex flex-col items-end justify-evenly gap-50 pt-20">
          <div className="text-center">
            <img
              src={ContactLogo}
              alt=""
              className="w-40 h-40 hover:scale-[1.1] duration-300  animate-shake"
            />
            <span className="text-3xl font-bold  bg-[url('https://i.pinimg.com/736x/48/66/08/48660831b6bedf3e1e1b6103409197b0.jpg')] bg-blur-sm rounded-full">contact</span>
          </div>
          <div className="text-center">
            <img
              src={GithubLogo}
              alt=""
              className="w-40 h-40 hover:scale-[1.1] duration-300 animate-shake"
            />
          <span className="text-3xl font-bold  bg-[url('https://i.pinimg.com/1200x/24/05/5f/24055f957d15bc1868e03d078ec6fbe4.jpg')] bg-blur-sm rounded-full">github</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-40 ">
        <div className="text-center">
          <img
            src={LinkinLogo}
            alt=""
            className="w-50 h-40 mt-20 hover:scale-[1.1] duration-300  animate-shake"
          />
          <span className="text-3xl font-bold  bg-[url('https://i.pinimg.com/736x/4d/c5/04/4dc5049da6ec5881c934f9f34003acba.jpg')] bg-blur-sm rounded-full">Linkin</span>
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
          className="h-40 hover:scale-[1.1] duration-300 animate-shake"
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
                {/* <button
                  onClick={toggleSidebar}
                  className="text-gray-500 hover:text-gray-800 mb-4"
                >
                  ✖ Close
                </button> */}

                <ul
                  className="font-bold text-3xl flex flex-col  
                items-center gap-30"
                >
                  <li className="hover:scale-[1.1] duration-300 cursor-pointer">
                    About me{" "}
                  </li>
                  <li className="hover:scale-[1.1] duration-300 cursor-pointer">
                    Skills{" "}
                  </li>
                  <li className="hover:scale-[1.1] duration-300 cursor-pointer">
                    Project{" "}
                  </li>
                  <li className="hover:scale-[1.1] duration-300 cursor-pointer">
                    Work Expreriend{" "}
                  </li>
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
