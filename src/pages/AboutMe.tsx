import Aboutme from "../assets/aboutme.svg";
import CursorIcon from "../assets/yellow.png";
import Navbar from "../companents/NavBar";

const AboutMe = () => {
  return (
    <div
      style={{
        cursor: `url(${CursorIcon}), auto`,
      }}
    >
      <Navbar />
      <div className="bg-[url('https://i.pinimg.com/1200x/bb/7d/fe/bb7dfe150392b32010a63a02a61c1edf.jpg')] min-h-screen bg-cover bg-center flex  ">
        <img src={Aboutme} alt="" className="w-120 h-120 " />
        <div>
          <img
            src="https://i.pinimg.com/1200x/b1/b2/4d/b1b24df116fdd86ed1fec93e7320f88f.jpg"
            alt=""
            className="w-50 h-50 mt-4"
          />
          <img
            src="https://i.pinimg.com/1200x/f6/02/33/f6023343d6b5fa8a4b31388bd942502a.jpg"
            alt=""
            className="w-50 h-30 mt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
