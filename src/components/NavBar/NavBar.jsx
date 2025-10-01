import { FaSearch } from "react-icons/fa";
import { Button } from "../Button/Button.jsx";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from 'react-i18next';
import NavbarLogo from "../../assets/images/hero-images/navbar-logo.png";
import CustomIcon from "../../assets/images/icon.ico";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher.jsx";

const NavBar = () => {
  const { t } = useTranslation();

  return (
    <nav className="bg-[#59ACBE] shadow-lg">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between relative">

          {/* Logo */}
          <div className="flex-shrink-0 -my-3">
            <Link to="/" className="flex items-center">
              <img 
                src={NavbarLogo} 
                alt="Art Craft Academy" 
                className="h-40 w-auto hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>

          {/* Navigation Links */}
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
                <HashLink 
                  smooth 
                  to="/#categories" 
                  className="group flex flex-col items-center text-white hover:text-[#FCD11A] font-medium transition-all duration-300"
                >
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 mb-1">
                    <img src={CustomIcon} alt="Art Icon" className="w-8 h-8" />
                  </div>
                  <span className="text-lg font-semibold">{t('nav.categories')}</span>
                </HashLink>
              </li>
              <li>
                <HashLink 
                  smooth 
                  to="/#video-categories" 
                  className="group flex flex-col items-center text-white hover:text-[#FCD11A] font-medium transition-all duration-300"
                >
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 mb-1">
                    <img src={CustomIcon} alt="Art Icon" className="w-8 h-8" />
                  </div>
                  <span className="text-lg font-semibold">{t('nav.videos')}</span>
                </HashLink>
              </li>
              <li>
                <Link 
                  to="/pictures" 
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

          {/* Search, Language, Buttons */}
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
