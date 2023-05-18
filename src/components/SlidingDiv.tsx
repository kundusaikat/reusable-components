import { motion } from "framer-motion";

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
    <div className="relative">
      <div className="flex items-center justify-center h-[92vh] absolute w-full">
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
      <div className="flex items-center justify-center h-[92vh] absolute w-full">
        <motion.div
          initial={{ opacity: "100%" }}
          animate={{ opacity: "0%" }}
          exit={{ opacity: "100%" }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="w-[15vw] h-[15vw] flex items-center justify-center border-2 border-black rounded-full"
        >
          <p className="text-2xl font-bold font-[cursive]">Welcome</p>
        </motion.div>
      </div>
    </div>
  );
};
