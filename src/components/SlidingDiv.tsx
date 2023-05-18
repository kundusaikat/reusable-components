import {  motion } from "framer-motion";

export const SlidingDiv = () => {
  const motionDivs = [
    {
      initial: { transform: "translate(-100%, -100%)" },
      animate: { transform: "translate(0%, 0%)" },
      exit: { transform: "translate(-100%, -100%)" },
      className: "bg-red-700",
    },
    {
      initial: { transform: "translate(100%, -100%)" },
      animate: { transform: "translate(0%, 0%)" },
      exit: { transform: "translate(100%, -100%)" },
      className: "bg-green-700",
    },
    {
      initial: { transform: "translate(-100%, 100%)" },
      animate: { transform: "translate(0%, 0%)" },
      exit: { transform: "translate(-100%, 100%)" },
      className: "bg-blue-700",
    },
    {
      initial: { transform: "translate(100%, 100%)" },
      animate: { transform: "translate(0%, 0%)" },
      exit: { transform: "translate(100%, 100%)" },
      className: "bg-yellow-700",
    },
  ];
  return (
    <div className="flex items-center justify-center h-[92vh] ">
      <div className="grid grid-cols-2 ">
      
          {motionDivs.map((motionDiv, index) => (
            <motion.div
              key={index}
              initial={motionDiv.initial}
              animate={motionDiv.animate}
              exit={motionDiv.exit}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className={`w-[10vw] h-[10vw] ${motionDiv.className}`}
            ></motion.div>
          ))}
      </div>
    </div>
  );
};
