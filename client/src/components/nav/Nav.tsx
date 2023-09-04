import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";
import { BsPlusSquareFill } from "react-icons/bs";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import {BsFillStarFill} from 'react-icons/bs'
import styles from './nav.module.css'

const Nav = () => {
  const menus = [
    { name: "Home", link: "/", icon: AiFillHome },
    { name: "Profile", link: "/", icon: BsFillPersonFill },
    { name: "Post", link: "/", icon: BsPlusSquareFill },
    { name: "About", link: "/", icon: BsFillStarFill },
   
  ];

  const goOut = [{ name: "Go out", link: "/", icon: FaSignOutAlt },]
  const [open, setOpen] = useState(false);  
  return (
    <section className="flex h-screen items-center">
      <nav
        className={`bg-[#0e0e0e]  ${
          open ? "w-60" : `${styles.navOpen}`
        } duration-500 text-white px-4 ${styles.nav}`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={30}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="flex flex-col gap-6 ">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` group flex items-center text-sm  gap-5 font-medium p-2  rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "25" })}</div> 
           
              <h3
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre text-base font-bold hover:text-gray-300  ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h3>
              
            </Link>
          ))}
        </div>
         {goOut?.map((out, i) => (
            <Link
              to={out?.link}
              key={i}
              className={`
              } group flex items-center text-sm  gap-5 font-medium p-2  rounded-md`}
            >
              <div>{React.createElement(out?.icon, { size: "25" })}</div>
              <h3
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {out?.name}
              </h3>
              
            </Link>
          ))}
      </nav>

      <nav className={`${styles.mobile}`}>
          <Link to='#'> <div>{React.createElement(AiFillHome)}</div></Link>
          <Link to='#'> <div>{React.createElement(BsFillPersonFill)}</div></Link>
          <Link to='#'> <div>{React.createElement(BsPlusSquareFill)}</div></Link>
          <Link to='#'> <div>{React.createElement(BsFillStarFill)}</div></Link>
          <Link to='#'> <div>{React.createElement(FaSignOutAlt)}</div></Link>
      </nav>
      
    </section>
  );
};

export default Nav;