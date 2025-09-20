import { Logoimg } from "../Logo/logo";
import { NavBarMenu } from "../../mockData/data.js";
import { FaSearch } from "react-icons/fa";


const NavBar = () => {
  return (
    <nav className="bg-[#003FBC]">
{/* ------------------- Logo Part -------------------------------------- */}


<div className="navbar-items-container flex items-center justify-between  ">

      <Logoimg />

{/* ------------------- nav Links Part --------------------------------- */}

      <div className="links-container hidden md:block ">
        <ul className="flex item-center gap-8 text-white">
          {NavBarMenu.map((item) => {
            return (
              <li key={item.id}>
                <a key={item.link}>{item.title}</a>
              </li>
            );
          })}
        </ul>
      </div>

{/* ------------------- Search icon Part --------------------------------- */}
    
    <button className="text-2xl rounded-full hover:bg-[#F1BD09] p-2 ">

          <FaSearch />

    </button>


</div>





    </nav>
  );
};

export default NavBar;
