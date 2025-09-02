import { useContext } from "react";
import { Navigate } from "react-router-dom";
import ProjectDetails from "../Features/Showcase/ProjectDetails";
import { ActiveProjectContext } from "../store/ActiveProject";

const ProtectedRoute = () => {
  const { activeProjectId } = useContext(ActiveProjectContext);
  if (!activeProjectId) {
    return <Navigate to="/#projects" replace />;
  } else {
    return (
      <>
        <ProjectDetails />
      </>
    );
  }
};

export default ProtectedRoute;
