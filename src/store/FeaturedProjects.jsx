import { createContext } from "react";
import { featuredProjects } from "../Utils/featuredProjects";

export const FeaturedProjectsContext = createContext();

const FeaturedProjectsProvider = ({ children }) => {
  return (
    <FeaturedProjectsContext.Provider value={featuredProjects}>
      {children}
    </FeaturedProjectsContext.Provider>
  );
};

export default FeaturedProjectsProvider;
