import GithubLogo from "../assets/github.svg";
import ContactLogo from "../assets/contact.svg";
import LinkinLogo from "../assets/Linkin.svg";
import MusicLogo from "../assets/music.svg";
import BlogLogo from "../assets/blog.svg";
import { useState } from "react";

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const handleClick = () => {
    setIsPlaying(true);
    setIsPlaying(!isPlaying)
  };
  return (
    <div className="grid grid-cols-3 gap-14 min-h-screen bg-[url('/src/assets/bg.svg')] bg-cover bg-center">
      <div >
        <div className="flex flex-col items-end justify-evenly gap-50 pt-20">
          <img src={ContactLogo} alt="" className="w-40 h-40 hover:scale-[1.1] duration-300" />
          <img src={GithubLogo} alt="" className="w-40 h-40 hover:scale-[1.1] duration-300" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-40 ">
        <img src={LinkinLogo} alt="" className="w-50 h-40 mt-20 hover:scale-[1.1] duration-300" />
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
        <img src={BlogLogo} alt="" className="h-40 hover:scale-[1.1] duration-300" />
      </div>
    </div>
  );
};

export default Home;
