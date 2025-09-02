import { useContext } from "react";
import { Link } from "react-router-dom";
import { motion, spring } from "motion/react";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

import { ActiveProjectContext } from "../../store/ActiveProject";
import { FeaturedProjectsContext } from "../../store/FeaturedProjects";
import ProjectTemp from "./ProjectTemp";

const ProjectDetails = () => {
  const projectList = useContext(FeaturedProjectsContext);
  const { activeProjectId } = useContext(ActiveProjectContext);
  const activeProject = projectList.find(
    (project) => project.projectId === activeProjectId
  );
  const {
    projectName,
    projectDetails,
    projectStack,
    imgCarousel1,
    imgCarousel2,
    imgCarousel3,
    imgCarousel4,
    features,
    liveSite,
    githubLink,
  } = activeProject;
  return (
    <motion.div
      className="mt-40 w-[90%] md:w-[70%] mx-auto"
      initial={{ x: "120vw" }}
      animate={{ x: 0 }}
      transition={{ type: spring, stiffness: 120 }}
    >
      <Link
        to="/#projects"
        className="fixed top-[8rem] z-15 md:top-[10rem] left-[1rem]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          className="fill-black dark:fill-white"
        >
          <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
        </svg>
      </Link>
      <ProjectTemp type="gap-12">
        <ProjectTemp.Title
          projectName={projectName}
          liveSite={liveSite}
          githubLink={githubLink}
          type="text-[20px] md:text-4xl text-lime-950"
        />

        <ProjectTemp.Stack projectStack={projectStack}>
          <h3 className="text-[18px] md:text-2xl font-bold mb-2">Tech Stack</h3>
        </ProjectTemp.Stack>
        <ProjectTemp.Overview
          projectSummary={projectDetails}
          alignmentType="text-start"
        >
          <h3 className="text-[18px] md:text-2xl font-bold mb-2">
            Description
          </h3>
        </ProjectTemp.Overview>
      </ProjectTemp>
      <div className="mt-12">
        <ProjectTemp>
          <ProjectTemp.Features features={features}>
            <h3 className="text-[18px] md:text-2xl font-bold mb-2">
              Core Features
            </h3>
          </ProjectTemp.Features>
        </ProjectTemp>
      </div>
      <div className="mt-12">
        <ProjectTemp type="gap-8">
          <div
            className="flex gap-2 mb-4 bg-stone-700 h-[150px] md:min-h-[400px] lg:min-h-[800px] 
            overflow-hidden relative
          group"
          >
            <div
              className="group-hover:flex gap-2 items-center border-2 border-white rounded-[50%]
             bg-stone-950 text-lime-50 p-4 absolute top-[40%] left-[45%] 
             hidden z-10 hover:scale-105"
            >
              <Link
                to={liveSite}
                target="_blank"
                className="opacity-70 hover:opacity-100"
              >
                Visit
              </Link>
            </div>
            <SlidingCarousel
              imgCarousel={imgCarousel1}
              animation={[-100, 0]}
              leftPosition="left-[0px] lg:left-[12px]"
            />
            <SlidingCarousel
              imgCarousel={imgCarousel2}
              animation={[100, 0]}
              leftPosition="left-[calc(24%+4px)] lg:left-[calc(24%+18px)]"
            />
            <SlidingCarousel
              imgCarousel={imgCarousel3}
              animation={[-100, 0]}
              leftPosition="left-[calc(48%+8px)] lg:left-[calc(48%+24px)]"
            />
            <SlidingCarousel
              imgCarousel={imgCarousel4}
              animation={[100, 0]}
              leftPosition="left-[calc(72%+12px)] lg:left-[calc(72%+30px)]"
            />
          </div>
        </ProjectTemp>
      </div>
    </motion.div>
  );
};

const SlidingCarousel = ({ imgCarousel, animation, leftPosition }) => {
  return (
    <div
      className={`w-[24%] flex flex-col gap-2 absolute top-[-100px] ${leftPosition}`}
    >
      {imgCarousel.map((img, index) => (
        <motion.div
          key={index}
          animate={{ y: animation }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
          }}
        >
          <ProjectTemp.Image
            projectName={index}
            projectImg={img}
            type="max-w-[100%] w-full h-auto md:h-auto"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectDetails;
