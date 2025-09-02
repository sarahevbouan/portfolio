import { createContext, useState } from "react";
import { getStorage } from "../services/apiStorage";

export const ActiveProjectContext = createContext();

const ActiveProjectProvider = ({ children }) => {
  const projectId = getStorage(sessionStorage, "activeProjectId");
  const [activeProjectId, setActiveProjectId] = useState(projectId);
  return (
    <ActiveProjectContext.Provider
      value={{ activeProjectId, setActiveProjectId }}
    >
      {children}
    </ActiveProjectContext.Provider>
  );
};

export default ActiveProjectProvider;
