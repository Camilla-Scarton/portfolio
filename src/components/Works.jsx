import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects, filters } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { faLaptopCode, faLaptop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const ProjectCard = ({
  index,
  info,
  name,
  description,
  tags,
  image,
  source_code_link,
  site_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      whileInView={{ opacity: 1 }}
    >
      <Tilt
        options={{
          max: 8,
          scale: 1,
          speed: 450,
          axis: "x",
        }}
        className="h-full bg-tertiary flex flex-col justify-between p-5 rounded-2xl xs:w-[340px] border-2 border-tertiary hover:border-2 hover:border-secondary"
      >
        <div>
          <div className="flex flex-wrap gap-4 cursor-default">
            {info.map((info, i) => (
              <p key={i} className={`text-[18px] text-white`}>
                #{info}
              </p>
            ))}
          </div>
          <div className="mt-4 cursor-default">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="text-white text-justify text-[18px] mt-4">{description}</p>
          </div>
          <div className="my-6 flex flex-wrap justify-center gap-4 cursor-default">
            {tags.map((tag) => (
              <p
                key={tag.name}
                className={`text-[16px] border border-secondary rounded-lg px-2 py-0.5 ${tag.color}`}
              >
                {tag.name}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-row justify-evenly items-center w-full text-[18px] text-white font-bold">
          {source_code_link && (
            <a href={source_code_link} target="_blank">
              See code: <FontAwesomeIcon icon={faLaptopCode} size="xl" />
            </a>
          )}
          {site_link && (
            <a href={site_link} target="_blank">
              See live: <FontAwesomeIcon icon={faLaptop} size="xl" />
            </a>
          )}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [filteredProjects, setFilteredProjects] = useState([]);

  function handleFilterChange(evt) {
    const choice = evt.target.value;
    switch (choice) {
      case "all":
        setFilteredProjects([]);
        break;
      case "react":
        setFilteredProjects(projects.filter((el) => el.info.includes("react")));
        break;
      case "html+css+js":
        setFilteredProjects(
          projects.filter(
            (el) => el.tags.length === 3 && !el.info.includes("develhope")
          )
        );
        break;
      case "games-serie":
        setFilteredProjects(
          projects.filter((el) => el.info.includes("games-serie"))
        );
        break;
      case "colors-serie":
        setFilteredProjects(
          projects.filter((el) => el.info.includes("colors-serie"))
        );
        break;
      case "develhope":
        setFilteredProjects(
          projects.filter((el) => el.info.includes("develhope"))
        );
        break;
    }
  }

  return (
    <>
      <motion.div variants={textVariant()} whileInView={{ opacity: 1 }}>
        <p className={styles.sectionSubText}>Done & Ongoing</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        whileInView={{ opacity: 1 }}
        className="mt-3 text-secondary
           sm:text-[24px] text-[18px] mx-w-3xl leading-[30px] cursor-default"
      >
        Following projects showcase my skills and experience trought real-world
        examples of my work. Each project is briefly described and linked to the
        GitHub repository and the live version. <br /> I love creating projects
        related to my hobbies and my passions. I believe in{" "}
        <q>learning by doing</q> so... it's what I'm actually doing!
      </motion.p>
      <Tilt className="w-[200px] mx-auto my-10">
        <motion.div
          variants={fadeIn("right", "spring", 0, 1)}
          whileInView={{ opacity: 1 }}
        >
          <form className="green-pink-gradient rounded-[20px] p-0.5">
            <label htmlFor="filters" aria-label={`Select filter for projects`}>
              <select
                name="filters"
                id="filters"
                className="appearance-none bg-tertiary w-full p-[9px] rounded-[20px] shadow-card text-center text-[18px] sm:text-[20px] font-bold focus-visible:outline-none hover:cursor-pointer"
                onChange={handleFilterChange}
              >
                {filters.map((filter, i) => (
                  <option key={`filter-key-${i}`} value={filter}>
                    #{filter}
                  </option>
                ))}
              </select>
            </label>
          </form>
        </motion.div>
      </Tilt>
      <div className="mt-10 flex flex-wrap gap-7 items-strech justify-center">
        {filteredProjects.length === 0
          ? projects.map((project, i) => (
              <ProjectCard key={`project-${i}`} index={i} {...project} />
            ))
          : filteredProjects.map((project, i) => (
              <ProjectCard key={`project-${i}`} index={i} {...project} />
            ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
