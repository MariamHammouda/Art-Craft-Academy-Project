import { NavBarMenu } from "../../mockData/data.js";
import { FaSearch } from "react-icons/fa";
import { Button } from "../Button/Button.jsx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Artlogo from "../../assets/images/hero-images/Artlogo.png";
import CustomIcon from "../../assets/images/icon.ico";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (link) => {
    // If it's a hash link to an anchor on the home page
    if (link.startsWith('/#')) {
      const anchor = link.split('#')[1];
      if (location.pathname !== '/') {
        navigate('/', { replace: false });
        // Delay until next paint so home mounts, then scroll
        requestAnimationFrame(() => {
          const el = document.getElementById(anchor);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        });
      } else {
        const el = document.getElementById(anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    // Regular route navigation
    navigate(link);
  };

  return (
    <nav className="bg-[#59ACBE] shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between relative">
          


          {/* Navigation Links - Center */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <ul className="hidden md:flex items-center gap-8 text-white">
            {NavBarMenu.map((item) => (
              <li key={item.id}>
                {item.link.includes('#') ? (
                  <button 
                    onClick={() => handleNavClick(item.link)} 
                    className="group flex flex-col items-center text-white hover:text-[#FCD11A] font-medium transition-all duration-300"
                  >
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 mb-1">
                      <img src={CustomIcon} alt="Art Icon" className="w-5 h-5" />
                    </div>
                    <span className="text-base font-semibold">{item.title}</span>
                  </button>
                ) : (
                  <Link 
                    to={item.link} 
                    className="group flex flex-col items-center text-white hover:text-[#FCD11A] font-medium transition-all duration-300"
                  >
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 mb-1">
                      <img src={CustomIcon} alt="Art Icon" className="w-5 h-5" />
                    </div>
                    <span className="text-base font-semibold">{item.title}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Search Icon & Buttons - End */}
        <div className="flex items-center gap-4 flex-shrink-0 ml-auto">
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
      </div>
    </nav>
  );
};

export default NavBar;