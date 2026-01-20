import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-amber-100">
      <ul
        className="font-bold text-[24px] flex flex-row  justify-evenly
                 gap-4"
      >
        <li
          className="hover:scale-[1.1] duration-300 cursor-pointer"
          onClick={() => navigate("/")}
        >
          Home{" "}
        </li>

        <li className="hover:scale-[1.1] duration-300 cursor-pointer">
          <Link to="/aboutme">
          About me{" "}
          </Link>
        </li>
        <li className="hover:scale-[1.1] duration-300 cursor-pointer">
          Skills{" "}
        
        </li>
        <li className="hover:scale-[1.1] duration-300 cursor-pointer">
          <Link to="/projects">
          Projects{" "}
          </Link>
        </li>
        <li className="hover:scale-[1.1] duration-300 cursor-pointer">
          Work Expreriend{" "}
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
