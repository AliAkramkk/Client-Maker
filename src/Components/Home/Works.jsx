import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../../styles";
// import { github } from "../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
//   tags,
  image,
//   source_code_link,
//   live_link,
//   features,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[480px] w-full"
      >
        <div
          className="relative w-full h-[230px] cursor-pointer"
          onClick={() => window.open(live_link, "_blank")}
        >
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
            //   onClick={(e) => {
            //     e.stopPropagation();
            //     window.open(source_code_link, "_blank");
            //   }}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              {/* <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              /> */}
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex items-center justify-between">
            <h3 className="text-black  font-bold md:text-[24px]">{name}</h3>
            {/* <h3
            //   onClick={() => window.open(live_link, "_blank")}
              className="px-2 cursor-pointer text-blue-600 underline-offset-2 underline"
            >
              Go Live
            </h3> */}
          </div>
          <p className="mt-2 text-secondary text-[14px] text-justify">
            {description}
          </p>
        </div>
        {/* <div className="mt-4 font-bold tracking-wider">Features</div>
        <ul className="mt-5 list-disc ml-5 space-y-2 text-justify">
          {features.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div> */}
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h1 className="font-bold text-3xl text-center">Our Recent Works</h1> 
        {/* <h2 className={`${styles.sectionHeadText}`}>Our Recent Works.</h2> */}
      </motion.div>

      {/* <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify"
        >
         
        </motion.p>
      </div> */}

      <div className="mt-20 flex flex-wrap justify-center gap-14">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");
