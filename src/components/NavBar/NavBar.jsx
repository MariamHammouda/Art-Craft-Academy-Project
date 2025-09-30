import { FaSearch } from "react-icons/fa";
import { Button } from "../Button/Button.jsx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import NavbarLogo from "../../assets/images/hero-images/navbar-logo.png";
import CustomIcon from "../../assets/images/icon.ico";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher.jsx";

const NavBar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (link) => {
    console.log("Navigation to:", link);
    
    // If it's a hash link to an anchor on the home page
    if (link.startsWith('/#')) {
      const anchor = link.split('#')[1];
      if (location.pathname !== '/') {
        navigate('/');
        // Use setTimeout instead of requestAnimationFrame for better reliability
        setTimeout(() => {
          const el = document.getElementById(anchor);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
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
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between relative">
{/* Logo - Start (only show on non-home pages) */}
          {location.pathname !== '/' && (
            <div className="flex-shrink-0 -my-3">
              <Link to="/" className="flex items-center">
                <img 
                  src={NavbarLogo} 
                  alt="Art Craft Academy" 
                  className="h-40 w-auto hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>
          )}
          {/* Navigation Links - Center */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <ul className="hidden md:flex items-center gap-8 text-white">
              <li>
                <Link 
                  to="/" 
                  className="group flex flex-col items-center text-white hover:text-[#FCD11A] font-medium transition-all duration-300"
                >
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 mb-1">
                    <img src={CustomIcon} alt="Art Icon" className="w-8 h-8" />
                  </div>
                  <span className="text-lg font-semibold">{t('nav.home')}</span>
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('/#categories')} 
                  className="group flex flex-col items-center text-white hover:text-[#FCD11A] font-medium transition-all duration-300"
                >
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 mb-1">
                    <img src={CustomIcon} alt="Art Icon" className="w-8 h-8" />
                  </div>
                  <span className="text-lg font-semibold">{t('nav.categories')}</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('/#video-categories')} 
                  className="group flex flex-col items-center text-white hover:text-[#FCD11A] font-medium transition-all duration-300"
                >
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 mb-1">
                    <img src={CustomIcon} alt="Art Icon" className="w-8 h-8" />
                  </div>
                  <span className="text-lg font-semibold">{t('nav.videos')}</span>
                </button>
              </li>
              <li>
                <Link 
                  to="/pictures" 
                  onClick={(e) => {
                    console.log("Pictures Link clicked - should navigate immediately");
                    // Don't prevent default - let React Router handle it
                  }}
                  className="group flex flex-col items-center text-white hover:text-[#FCD11A] font-medium transition-all duration-300"
                >
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 mb-1">
                    <img src={CustomIcon} alt="Art Icon" className="w-8 h-8" />
                  </div>
                  <span className="text-lg font-semibold">{t('nav.pictures')}</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/courses" 
                  onClick={() => console.log("Courses Link clicked")}
                  className="group flex flex-col items-center text-white hover:text-[#FCD11A] font-medium transition-all duration-300"
                >
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 mb-1">
                    <img src={CustomIcon} alt="Art Icon" className="w-8 h-8" />
                  </div>
                  <span className="text-lg font-semibold">{t('nav.courses')}</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/shop" 
                  onClick={() => console.log("Shop Link clicked")}
                  className="group flex flex-col items-center text-white hover:text-[#FCD11A] font-medium transition-all duration-300"
                >
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 mb-1">
                    <img src={CustomIcon} alt="Art Icon" className="w-8 h-8" />
                  </div>
                  <span className="text-lg font-semibold">{t('nav.shop')}</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  onClick={() => console.log("About Link clicked")}
                  className="group flex flex-col items-center text-white hover:text-[#FCD11A] font-medium transition-all duration-300"
                >
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 mb-1">
                    <img src={CustomIcon} alt="Art Icon" className="w-8 h-8" />
                  </div>
                  <span className="text-lg font-semibold">{t('nav.about')}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Search Icon, Language Switcher & Buttons - End */}
          <div className="flex items-center gap-4 flex-shrink-0 ml-auto mt-8">
            <button className="text-2xl text-white rounded-full hover:bg-[#F1BD09] p-2" title={t('common.search')}>
              <FaSearch />
            </button>

            <LanguageSwitcher />

            <Button
              onClick={() => console.log("Login clicked")}
              className="px-6 py-2 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white hover:text-[#59ACBE] transition duration-200"
            >
              {t('nav.login')}
            </Button>

            <Button
              onClick={() => console.log("Sign Up clicked")}
              className="px-6 py-2 bg-[#FCD11A] text-[#59ACBE] border-2 border-[#FCD11A] rounded-lg hover:bg-yellow-500 transition duration-200"
            >
              {t('nav.signup')}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;