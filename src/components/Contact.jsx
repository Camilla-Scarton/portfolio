import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faShieldHalved
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <footer>
      <motion.div variants={textVariant()} whileInView={{ opacity: 1 }}>
        <p className={styles.sectionSubText}>Contact me</p>
        <h2 className={styles.sectionHeadText}>Links & Profiles</h2>
      </motion.div>
      <motion.div
        variants={fadeIn("", "", 0.1, 1)} whileInView={{ opacity: 1 }}
        className="flex flex-row flex-wrap gap-6 mt-3 text-secondary
      sm:text-[24px] text-[18px] mx-w-3xl leading-[30px]"
      >
        <a href="https://github.com/Camilla-Scarton">
          <FontAwesomeIcon icon={faGithub} size="2xl" />
          <span className="px-3">Github</span>
        </a>
        <a href="https://www.linkedin.com/in/camilla-scarton/">
          <FontAwesomeIcon icon={faLinkedin} size="2xl" />
          <span className="px-3">LinkedIn</span>
        </a>
        <a href="mailto:camy.s96@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} size="2xl" />
          <span className="px-3">Gmail</span>
        </a>
        <a href="https://www.codewars.com/users/Camilla%20Scarton">
          <FontAwesomeIcon icon={faShieldHalved} size="2xl" />
          <span className="px-3">Codewars</span>
        </a>
        <a href="https://www.freecodecamp.org/Camilla_Scarton">
          <FontAwesomeIcon icon={faFreeCodeCamp} size="2xl" />
          <span className="px-3">freeCodeCamp</span>
        </a>
      </motion.div>
    </footer>
  );
};

export default SectionWrapper(Contact, "contact");
