import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link } ) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index*0.5, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img 
                src={github}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bolde text-[24px]">{name}</h3>
          <p className="text-secondary text-[14px] mt-2">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map(tag => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-sec
           text-[17px] mx-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience trought real-world examples of my work. Each project is briefly described and linked to the GitHub repository and the live version. <br /> In this section there are all kind of projects: finished ones, ongoing ones... and future ones too! <br /> I love creating projects related to my hobbies and my passions. I believe in <q>learning by doing</q> so... it's what I'm actually doing! 
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, i) => <ProjectCard key={`project-${i}`} index={i} {...project} />)}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "projects");
