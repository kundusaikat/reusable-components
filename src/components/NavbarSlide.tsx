import { useState } from "react";

import { motion } from "framer-motion";

function NavbarSlide() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <button onClick={()=>setMenuOpen(true)}>Toggle Div</button>
      <motion.div
        className="fixed top-0 left-0 w-full"
        initial={{ transform: "translate(-100%, -100%)" }}
        animate={{
          transform: menuOpen ? "translate(0%, 0%)" : "translate(-100%, -100%)",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* Content */}
        <div className="bg-black text-white min-h-screen">
          Hello
          <div onClick={()=>setMenuOpen(false)}>close</div>
        </div>
      </motion.div>
    </div>
  );
}

export default NavbarSlide;
