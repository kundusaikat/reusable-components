import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="bg-black text-white flex justify-between px-5 items-center h-[8vh] sticky z-10">
        <motion.div
          className={`flex flex-col gap-1 cursor-pointer ${
            menuOpen ? "rotate-90" : ""
          }`}
          onClick={toggleMenu}
          initial={false}
          animate={{ rotate: menuOpen ? 90 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="w-6 h-1 bg-white"></div>
          <div className="w-6 h-1 bg-white"></div>
          <div className="w-6 h-1 bg-white"></div>
        </motion.div>

        <AnimatePresence>
          {!menuOpen && (
            <>
              <motion.div
                className=""
                initial={{ y: "-100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "-100%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                Navbar
              </motion.div>
              <motion.div
                className=""
                initial={{ y: "-100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "-100%" }}
                transition={{ duration: 1,ease: "easeInOut" }}
              >
                Saikat
              </motion.div>
            </>
          )}
          
        </AnimatePresence>
        <AnimatePresence>
        {
            menuOpen && 
            <motion.div
                className="float-right fixed right-[5vw]"
                onClick={toggleMenu}
                initial={{ x: "5vw" }}
                animate={{ x: "0vw" }}
                exit={{ x: "5vw" }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                X
              </motion.div>
          }
          </AnimatePresence>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed top-[8vh] w-full z-0 bg-black h-[92vh] text-white"
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
      {menuOpen && (
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                exit={{ x: "-100%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="px-5 flex flex-col gap-10 text-white"
              >
                <p>menu 1</p>
                <p>menu 2</p>
                <p>menu 3</p>
                <p>menu 4</p>
                <p>menu 5</p>
                <p>menu 6</p>
                <p>menu 7</p>
              </motion.div>
       ) }</AnimatePresence>
    </>
  );
};

export default Navbar;
