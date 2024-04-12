import { Link } from "react-router-dom";
import { SidebarData } from "./SideBarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { useState } from "react";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  function createMarkup(b) {
    console.log(b);
    return {
       
      __html: b,
    };
  }
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar text-white bg-gray-50 dark:bg-gray-800 ">
          <Link to="#" className="menu-bars">
            <div
              className="flex gap-3 justify-center items-center"
              onClick={showSidebar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              SMAS ADMIN
            </div>
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu  bg-gray-50 dark:bg-gray-800  active" : "nav-menu  bg-gray-50 dark:bg-gray-800 "}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle  bg-gray-50 dark:bg-gray-800 ">
              <Link to="#" className="menu-bars text-white ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
