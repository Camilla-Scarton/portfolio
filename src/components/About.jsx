import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[220px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5*index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          option={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-5 min-h-[220px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] mx-w-3xl leading-[30px]">
          I'm a junior web developer with experience in JavaScript (300+ exercises done at Codewars) and expertise in React (6 months of full immersion in Develhope). I love Tailwind CSS for styling. This portfolio in meant to be a nice view of my GitHub projects and my job experiences so far.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, i) => <ServiceCard key={service.title} index={i} {...service} />)}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");
