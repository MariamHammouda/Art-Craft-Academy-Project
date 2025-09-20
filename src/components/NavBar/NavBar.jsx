import { Logoimg } from "../Logo/logo";
import { NavBarMenu } from "../../mockData/data.js";

const NavBar = () => {
  return (
    <nav className="bg-[#003FBC]">
{/* ------------------- Logo Part -------------------------------------- */}

      <Logoimg />

{/* ------------------- nav Links Part --------------------------------- */}

      <div className="links-container">
        <ul>
          {NavBarMenu.map((item) => {
            return (
              <li key={item.id}>
                <a key={item.link}>{item.title}</a>
              </li>
            );
          })}
        </ul>
      </div>

{/* ------------------- nav Links Part --------------------------------- */}



    </nav>
  );
};

export default NavBar;
