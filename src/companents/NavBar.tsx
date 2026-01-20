import { Link } from "react-router-dom";
import { menuItems } from "../config/menu";
import HomeLogo from "../assets/home-logo.png";

const NavBar = () => {
  return (
    <nav className="bg-amber-100 font-rasal">
      <ul className="font-bold text-[24px] flex justify-evenly gap-4 py-4 items-center">
        {menuItems.map((item) => (
          <li
            key={item.path}
            className="hover:scale-[1.1] duration-300"
          >
            {item.path === "/" ? (
              <Link to={item.path}>
                <img
                  src={HomeLogo}
                  alt="Home"
                  className="h-20 w-auto hover:scale-[1.1] duration-300 animate-shake "
                />
              </Link>
            ) : (
              <Link to={item.path}>{item.label}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
