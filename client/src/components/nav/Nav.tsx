import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { FiMessageSquare, FiFolder } from "react-icons/fi";
import { Link } from "react-router-dom";
import styles from './nav.module.css'

const Nav = () => {
  const menus = [
    { name: "Home", link: "/", icon: MdOutlineDashboard },
    { name: "user", link: "/", icon: AiOutlineUser },
    { name: "messages", link: "/", icon: FiMessageSquare },
    { name: "analytics", link: "/", icon: TbReportAnalytics, margin: true },
    { name: "File Manager", link: "/", icon: FiFolder },
   
  ];
  const [open, setOpen] = useState(false);  
  return (
    <section className="flex h-screen items-center">
      <nav
        className={`bg-[#0e0e0e]  ${
          open ? "w-72" : `${styles.navOpen}`
        } duration-500 text-gray-100 px-4 ${styles.nav}`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={30}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && ""
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "25" })}</div>
              <h3
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h3>
              <h3
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h3>
            </Link>
          ))}
        </div>
      </nav>
      
    </section>
  );
};

export default Nav;