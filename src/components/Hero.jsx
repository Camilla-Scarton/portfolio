import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { RoseCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row tems-start gap-5`}>
        <div className="flex flex-col items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#755bb4]" />
          <div className="w-1 h-40 sm:h-80 bg-gradient-to-b from-purple-600 to-transparent" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#755bb4]">Camilla</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a junior Full-Stack Web Developer.<br className="sm:block hidden"/> This is my portfolio!
          </p>
        </div>
      </div>
      <RoseCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero;
