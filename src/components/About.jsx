import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { labels } from "../constants";
import { SectionWrapper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion";

const LabelCard = ({ index, title, icon }) => {
  return (
    <Tilt className="w-[220px]">
      <motion.div
        variants={fadeIn("right", "spring", 0.4*index, 0.75)}
        whileInView={{ opacity: 1 }}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          option={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] p-4 m-0.5 sm:min-h-[100px] flex justify-evenly items-center flex-col"
        >
          <h3 className="text-white text-[18px] sm:text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} whileInView={{ opacity: 1 }}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} whileInView={{ opacity: 1 }} className="mt-4 text-secondary sm:text-[24px] text-[18px] mx-w-3xl leading-[30px] cursor-default">
        Passionate about web development, I have honed my JavaScript skills through 300+ Codewars exercises and consistent practise. I'm proficient in React, mastered at Develhope, and adept in Angular through my professional journey. As a hobby, I collect certificates!
      </motion.p>
      <div className="mt-10 flex flex-wrap justify-center gap-4 xs:gap-7">
        {labels.map((label, i) => <LabelCard key={label.title} index={i} {...label} />)}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");
