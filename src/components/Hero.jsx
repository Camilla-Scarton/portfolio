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
    </section>
  )
}

export default Hero;
