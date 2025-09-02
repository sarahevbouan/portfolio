import { useContext } from "react";
import Project from "./Project";
import { FeaturedProjectsContext } from "../../store/FeaturedProjects";

const ProjectList = ({ registerSectionNode }) => {
  const projectList = useContext(FeaturedProjectsContext);
  return (
    <div
      className="scroll-mt-24"
      ref={(el) => registerSectionNode("projects", el)}
      id="projects"
    >
      <div className="flex justify-center">
        <h2 className="text-center mb-6 border-b-3 border-[#009688] w-fit text-[18px] font-figtree font-black">
          FEATURED PROJECTS
        </h2>
      </div>
      <div
        className="md:space-y-28
      "
      >
        {projectList.map((project) => (
          <Project key={project.projectId} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
