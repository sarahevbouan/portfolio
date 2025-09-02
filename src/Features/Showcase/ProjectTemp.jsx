import { Link } from "react-router-dom";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

const ProjectTemp = ({ children, type }) => {
  return (
    <div
      className={`flex flex-col ${type} w-full h-full max-w-[100%] [&>*]:max-w-[100%]`}
    >
      {children}
    </div>
  );
};

const Image = ({ projectName, projectImg, type, borderRad }) => {
  return (
    <div className={type}>
      <img
        src={projectImg}
        alt={projectName}
        className={`w-full h-full
         ${borderRad}`}
      />
    </div>
  );
};

const Title = ({ projectName, liveSite, githubLink, children, type }) => {
  return (
    <div
      className="flex-col flex gap-4
    "
    >
      <h3
        className={`${type}
       dark:text-stone-50 font-bold`}
      >
        {projectName}
      </h3>
      <div className="flex gap-2 items-center">
        <Link to={liveSite} target="_blank">
          <LuSquareArrowOutUpRight />
        </Link>
        <Link to={githubLink} target="_blank">
          <FaGithub />
        </Link>
        {children}
      </div>
    </div>
  );
};

const Overview = ({ projectSummary, children, alignmentType }) => {
  return (
    <div className={alignmentType}>
      {children}
      <p>{projectSummary}</p>
    </div>
  );
};

const Stack = ({ projectStack, children }) => {
  return (
    <div>
      {children}
      <div className="flex flex-wrap gap-4">
        {projectStack.map((stack) => (
          <span
            key={stack}
            className="bg-stone-950 text-stone-50 dark:bg-[#c4c7c5] dark:text-stone-950 p-2 rounded hover:font-bold hover:scale-105 cursor-pointer"
          >
            {stack}
          </span>
        ))}
      </div>
    </div>
  );
};

const Features = ({ features, children }) => {
  return (
    <div>
      {children}
      <ul className="space-y-4">
        {features.map((feature) => (
          <li key={feature.feature}>
            <span className="text-[#009688] dark:text-[#009688] font-bold font-poppins">
              {feature.feature}
            </span>{" "}
            <span>{feature.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

ProjectTemp.Image = Image;
ProjectTemp.Title = Title;
ProjectTemp.Overview = Overview;
ProjectTemp.Stack = Stack;
ProjectTemp.Features = Features;

export default ProjectTemp;
