import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { FaLongArrowAltRight } from "react-icons/fa";

import { ActiveProjectContext } from "../../store/ActiveProject";
import Button from "../../ui/Button";
import ProjectTemp from "./ProjectTemp";
import { setStorage } from "../../services/apiStorage";

const Project = ({ project }) => {
  const {
    projectId,
    projectName,
    projectSummary,
    projectStack,
    projectImg,
    liveSite,
    githubLink,
  } = project;
  const { activeProjectId, setActiveProjectId } =
    useContext(ActiveProjectContext);
  const navigate = useNavigate();
  const handleClick = () => {
    setActiveProjectId(projectId);
    navigate("/project");
  };
  useEffect(() => {
    setStorage(sessionStorage, "activeProjectId", activeProjectId);
  }, [activeProjectId]);
  return (
    <div
      className="py-4 px-2 md:px-0 lg:pt-12 lg:pb-16
     dark:bg-stone-900
     border-b-2 dark:border-b-0 border-stone-300
      
     flex flex-col lg:flex-row gap-8 lg:items-center "
    >
      <div className="md:px-8 mt-0 flex-1/1 md:flex-3/7 md:py-4 lg:py-8 hover:opacity-90">
        <ProjectTemp type="gap-8">
          <ProjectTemp.Title
            projectName={projectName}
            liveSite={liveSite}
            githubLink={githubLink}
            type="text-3xl text-stone-950"
          >
            <Button onButtonClick={handleClick}>
              <FaLongArrowAltRight />
            </Button>
          </ProjectTemp.Title>
          <ProjectTemp.Overview
            projectSummary={projectSummary}
            type="md:text-justify"
          />
          <ProjectTemp.Stack projectStack={projectStack} />
        </ProjectTemp>
      </div>
      <div className="flex-1/1 md:flex-4/7 h-full min-h-[500px] relative group">
        <div
          className="hidden group-hover:block z-10 backdrop-fliter backdrop-blur-md
         bg-stone-950 text-white py-2 px-2 border-2 border-lime-50 rounded-[50%] 
         absolute top-[40%] left-[45%] opacity-80 hover:opacity-100 hover:scale-105"
        >
          <Button onButtonClick={handleClick}>
            <p className="hover:cursor-pointer">View</p>
          </Button>
        </div>
        <ProjectTemp type="gap-8">
          <motion.div
            className="absolute top-8 left-0 w-full md:w-[60%] 
            shadow-[0_25px_50px_-12px_rgb(0,0,0,0.25)] rounded-2xl hover:border-2
             hover:border-[#009688] hover:cursor-pointer"
            whileHover={{ scale: [0.9, 1] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              repeatType: "reverse",
            }}
          >
            <ProjectTemp.Image
              projectName={projectName}
              projectImg={projectImg[0]}
              type="w-[100%] h-[400px]"
              borderRad="rounded-2xl"
            />
          </motion.div>
          <motion.div
            className="absolute top-0 left-[35%] hidden md:block w-[60%] 
            shadow-[0_25px_50px_-12px_rgb(0,0,0,0.25)] hover:border-2 rounded-2xl
             hover:border-[#009688] hover:cursor-pointer"
            whileHover={{ scale: [0.9, 1] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              repeatType: "reverse",
            }}
          >
            <ProjectTemp.Image
              projectName={projectName}
              projectImg={projectImg[1]}
              type="w-[100%] h-[400px]"
              borderRad="rounded-2xl"
            />
          </motion.div>
        </ProjectTemp>
      </div>
    </div>
  );
};

export default Project;
