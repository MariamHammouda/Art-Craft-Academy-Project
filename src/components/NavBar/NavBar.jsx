import { Logoimg } from "../Logo/logo";
import { NavBarMenu } from "../../mockData/data.js";
import { FaSearch } from "react-icons/fa";
import { Button } from "../Button/Button.jsx"

const NavBar = () => {
  return (
    <nav className="bg-[#003FBC]">
      <div className="flex items-center justify-between relative">
          
          {/* Logo - First/Beginning */}
          <div className="flex-shrink-0">
            <Logoimg />
          </div>

          {/* Navigation Links - Center */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <ul className="hidden md:flex items-center gap-8 text-white">
              {NavBarMenu.map((item) => {
                return (
                  <li className="hover:text-[#FCD11A]" key={item.id}>
                    <a key={item.link}>{item.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Search Icon & Buttons - End */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <button className="text-2xl text-white rounded-full hover:bg-[#F1BD09] p-2">
              <FaSearch />
            </button>

            <Button
              onClick={() => console.log("Login clicked")}
              className="px-6 py-2 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white hover:text-[#003FBC] transition duration-200"
            >
              Login
            </Button>

            <Button
              onClick={() => console.log("Sign Up clicked")}
              className="px-6 py-2 bg-[#FCD11A] text-[#003FBC] border-2 border-[#FCD11A] rounded-lg hover:bg-yellow-500 transition duration-200"
            >
              Sign Up
            </Button>
          </div>

        </div>
    </nav>
  );
};

export default NavBar;