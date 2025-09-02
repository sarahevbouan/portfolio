import Contact from "../Features/Contact/Contact";
import Intro from "../Features/Showcase/Intro";
import ProjectList from "../Features/Showcase/ProjectList";
import ShowCase from "../Features/Showcase/ShowCase";
import Profile from "../Features/Showcase/Profile";

const Home = ({ registerSectionNode }) => {
  return (
    <>
      <ShowCase>
        <Intro registerSectionNode={registerSectionNode} />
        <Profile />
        <ProjectList registerSectionNode={registerSectionNode} />
      </ShowCase>
      <Contact registerSectionNode={registerSectionNode} />
    </>
  );
};

export default Home;
