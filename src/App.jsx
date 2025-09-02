import { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import ActiveProjectProvider from "./store/ActiveProject";
import Navbar from "./ui/Navbar";
import Home from "./Pages/Home";
import FeaturedProjectsProvider from "./store/FeaturedProjects";
import ProtectedRoute from "./Pages/ProtectedRoute";
import ScrollToTop from "./ui/ScrollToTop";

const App = () => {
  const sectionRefs = useRef({});
  const location = useLocation();
  const registerSectionNode = (name, el) => {
    sectionRefs.current[name] = el;
  };

  useEffect(() => {
    if (location.hash) {
      sectionRefs.current[location.hash.slice(1)].scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [location]);
  return (
    <FeaturedProjectsProvider>
      <ActiveProjectProvider>
        <ScrollToTop />
        <div className={`w-full space-y-12 `}>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<Home registerSectionNode={registerSectionNode} />}
            />
            <Route path="project" element={<ProtectedRoute />} />
          </Routes>
        </div>
      </ActiveProjectProvider>
    </FeaturedProjectsProvider>
  );
};

export default App;
