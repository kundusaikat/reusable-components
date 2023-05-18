import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Paths } from "./Paths";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="relative z-10">
        {/* Navbar */}
        <div className="bg-black text-white flex justify-between px-[2vw] items-center h-[8vh] sticky z-10">
          {/* hamburger */}
          <motion.div
            className={`flex flex-col gap-1 cursor-pointer ${
              menuOpen ? "rotate-90" : ""
            }`}
            onClick={toggleMenu}
            initial={{ y: "-6vh" }}
            animate={{ y: "0vh", rotate: menuOpen ? 90 : 0 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          >
            <div className="w-6 h-1 bg-white"></div>
            <div className="w-6 h-1 bg-white"></div>
            <div className="w-6 h-1 bg-white"></div>
          </motion.div>

          {/* Rest of the navbar */}
          <AnimatePresence>
            {!menuOpen && (
              <>
                <motion.div
                  className=""
                  initial={{ y: "-6vh" }}
                  animate={{ y: "0vh" }}
                  exit={{ y: "-6vh" }}
                  transition={{ duration: 3, ease: "easeInOut" }}
                >
                  Navbar
                </motion.div>
                <motion.div
                  className=""
                  initial={{ y: "-6vh" }}
                  animate={{ y: "0vh" }}
                  exit={{ y: "-6vh" }}
                  transition={{ duration: 3, ease: "easeInOut" }}
                >
                  Saikat
                </motion.div>
              </>
            )}
          </AnimatePresence>
          {/* Cross in open menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                className="float-right fixed right-[2vw] cursor-pointer"
                onClick={toggleMenu}
                initial={{ x: "10vw" }}
                animate={{ x: "0vw" }}
                exit={{ x: "10vw" }}
                transition={{ duration: 3, ease: "easeInOut" }}
              >
                <div className=" w-6 h-1 bg-white transform rotate-45 absolute "></div>
                <div className=" w-6 h-1 bg-white transform -rotate-45 "></div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Sliding top blank div */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="fixed top-[8vh] w-full  bg-black h-[92vh] text-white"
              initial={{ y: "-100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-100%" }}
              transition={{ duration: 3, ease: "easeInOut" }}
            ></motion.div>
          )}
        </AnimatePresence>

        {/* Sliding menus */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "-100%" }}
              transition={{ duration: 3, ease: "easeInOut" }}
              onClick={toggleMenu}
              className="fixed top-[8vh] px-[2vw] flex flex-col gap-1 text-white z-0"
            >
              {Paths.map((el) => (
                <Link to={el.shortPathName}>
                  <p>{el.title}</p>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
