import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  info,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index*0.5, 0.75)}>
      <Tilt
        options={{
          max: 8,
          scale: 1,
          speed: 450,
          axis: "x",
        }}
        className="bg-tertiary p-5 rounded-2xl xs:w-[340px]"
      >
        <div className="relative w-full h-[120px]">
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
              <img src={github} className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-4 cursor-default">
          {info.map((info, i) => (
            <p key={i} className={`text-[16px] text-white`}>
              #{info}
            </p>
          ))}
        </div>
        <div className="mt-5 cursor-default">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="text-secondary text-[18px] mt-2">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-4 cursor-default">
          {tags.map((tag) => (
            <p
              key={tag.name}
              className={`text-[16px] border border-white rounded-lg px-2 py-0.5 ${tag.color}`}
            >
              {tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Done & Ongoing</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary
           sm:text-[24px] text-[18px] mx-w-3xl leading-[30px] cursor-default"
      >
        Following projects showcase my skills and experience trought real-world
        examples of my work. Each project is briefly described and linked to the
        GitHub repository and the live version. <br /> I love creating projects
        related to my hobbies and my passions. I believe in <q>learning by doing</q> so... it's what I'm actually doing!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, i) => (
          <ProjectCard key={`project-${i}`} index={i} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
