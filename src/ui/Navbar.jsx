import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { IoMoon } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

import { getStorage, setStorage } from "../services/apiStorage";

const Navbar = () => {
  const uiTheme = getStorage(localStorage, "darkTheme");
  const [darkTheme, setDarkTheme] = useState(uiTheme);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    darkTheme ? body.classList.add("dark") : body.classList.remove("dark");
    setStorage(localStorage, "darkTheme", darkTheme);
  }, [darkTheme]);
  const toggleTheme = () => {
    setDarkTheme((theme) => !theme);
  };
  return (
    <nav
      className={`w-dvw h-24 px-[5%]
     flex gap-12 
    fixed z-100 top-0 left-0
    bg-[#fdfdfc]
    shadow-sm/5
    dark:bg-stone-950 dark:text-stone-300 
       items-center
    `}
    >
      <div className="flex flex-1/1 md:flex-1/8 items-center justify-between">
        <h1 className="font-black font-lexend-deca text-2xl">
          Sar<span className="">Ev</span>
        </h1>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="25"
          width="25"
          fill={darkTheme ? "white" : ""}
          viewBox="0 0 640 640"
          className={`${showMenu ? "hidden" : ""} md:hidden`}
          onClick={() => setShowMenu(true)}
        >
          <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" />
        </svg>
      </div>
      <div
        className={`flex md:flex-7/8 
          pt-12 text-[16px]
            bg-[#e8f5f4] dark:bg-stone-950 dark:text-lime-50
            flex-col gap-2
            fixed w-[60vw] h-[100vh] top-0 right-0 ${
              showMenu
                ? "translate-x-[0px]"
                : "translate-x-[150vw] opacity-0 text-xl"
            }
             transition-transform duration-200
            md:text-lime-950 dark:md:text-lime-50 md:justify-between md:translate-none md:opacity-100
             md:static md:flex-row md:w-fit md:h-fit md:bg-inherit dark:md:bg-revert md:pt-0
        
        `}
      >
        <motion.ul
          className="py-3 px-12 font-extrabold dark:font-normal
          gap-6 rounded-3xl flex 
          flex-col dark:md:bg-lime-50 dark:md:text-stone-950 md:flex-row
        "
        >
          <span
            className="absolute top-12 right-8 md:hidden"
            onClick={() => setShowMenu(false)}
          >
            X
          </span>

          <Link to="/#profile">About</Link>
          <Link to="/#projects">Projects</Link>
          <Link to="/#contact">Contact</Link>
        </motion.ul>
        <ul className="flex gap-2 items-center py-3 px-12 text-xl">
          <li className="cursor-pointer" onClick={toggleTheme}>
            {darkTheme ? (
              <MdSunny title="switch to light theme" />
            ) : (
              <IoMoon title="Switch to dark theme" />
            )}
          </li>
          <Link to="https://github.com/sarahevbouan" target="_blank">
            <FaGithub />
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
