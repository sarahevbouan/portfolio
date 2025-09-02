import { motion } from "motion/react";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiReactrouter, SiRed } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const skills = [
  { name: "HTML", component: <FaHtml5 className="text-[#E34F26]" /> },
  { name: "CSS", component: <FaCss3Alt className="text-[#1572B6]" /> },
  { name: "JAVASCRIPT", component: <FaJsSquare className="text-[#F7DF1E]" /> },
  { name: "REACTJS", component: <FaReact className="text-[#61DAFB]" /> },
  {
    name: "REACT ROUTER",
    component: <SiReactrouter className="text-[#CA4245]" />,
  },
  {
    name: "TANSTACK QUERY",
    component: <SiReactquery className="text-[#FF4154]" />,
  },
  { name: "REDUX TOOLKIT", component: <SiRedux className="text-[#764ABC]" /> },
  {
    name: "TAILWINDCSS",
    component: <RiTailwindCssFill className="text-[#38BDF8]" />,
  },
];

const Skills = () => {
  const parentVariant = {
    start: { opacity: 0 },
    end: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const childVariant = {
    start: { y: "70%", opacity: 0 },
    end: { y: 0, opacity: 1, transition: { stiffness: 30 } },
  };
  return (
    <div className="md:border-r-3 flex-1/2 md:pr-8">
      <h3
        className="mb-6 text-[18px] font-figtree font-black border-b-3 
        border-[#009688] w-fit justify-self-center"
      >
        SKILLS
      </h3>
      <motion.ul
        variants={parentVariant}
        initial="start"
        whileInView="end"
        className="text-xl font-bold
      flex gap-x-8  flex-wrap justify-center
      [&>*]:flex [&>*]:flex-col [&>*]:items-center [&>*]:gap-1 md:justify-start 
      [&>*]:w-[90%] sm:[&>*]:w-[40%] [&>*]:py-4 [&>*]:px-4
      [&>*]:rounded-2xl 
      [&>*]:hover:bg-stone-950 [&>*]:hover:text-lime-50
      dark:[&>*]:hover:bg-lime-50 dark:[&>*]:hover:text-stone-950
      [&>*>svg]:text-5xl [&>*>svg]:font-bold
      [&>*>p]:text-center [&>*>p]:text-[18px]"
      >
        {skills.map(({ name, component }, index) => (
          <motion.li key={index} variants={childVariant}>
            {component}
            <motion.p>{name}</motion.p>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Skills;
