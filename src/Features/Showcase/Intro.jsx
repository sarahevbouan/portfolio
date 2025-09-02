import { motion } from "motion/react";
import myphoto from "../../assets/images/myphoto.jpg";

const Intro = ({ registerSectionNode }) => {
  return (
    <div
      className="flex min-h-[55vh] pt-4 lg:pt-4 gap-12 flex-col items-center lg:flex-row scroll-mt-24"
      ref={(el) => registerSectionNode("profile", el)}
    >
      <div
        className=" relative
     
      text-3xl
    flex flex-col gap-4 mx-auto"
      >
        <div className="">
          <h3
            className="md:text-3xl text-2xl text-center lg:text-start font-bold
            dark:text-lime-50"
          >
            Hi, I'm <span className="border-b-4 border-[#009688]">Sarah</span>
          </h3>
        </div>
        <div className="md:flex-4/5">
          <motion.div
            className="text-4xl md:text-6xl lg:text-[5.5rem] font-black text-center lg:text-start
             overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{ duration: 5 }}
          >
            <h1 className="text-lime-950 dark:text-lime-50">FRONTEND</h1>
          </motion.div>
          <motion.div
            className="text-4xl md:text-6xl lg:text-[5.5rem] text-center lg:text-start
             font-extrabold overflow-hidden ml-4 md:ml-15"
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{ duration: 5, delay: 0.2 }}
          >
            <h1 className=" text-[#009688]">DEVELOPER</h1>
          </motion.div>
          <div
            className="dark:text-white text-sm md:text-[20px] mt-4 lg:ml-25
           text-center lg:text-start"
          >
            <p className=" md:block">
              I turn <span className=" font-bold text-[#181a1c]">Ideas</span>{" "}
              into <span className="font-bold text-[#181a1c]">Interactive</span>{" "}
              experiences and
            </p>

            <p>
              <span className="font-bold text-[#181a1c]">Build</span> modern
              websites that feel as good as they look!
            </p>
          </div>
        </div>
      </div>

      <div className="min-h-[300px] md:min-h-[440px] flex-1/1 md:flex-2/5 w-[90%] border-8 border-[#009688] relative">
        <img
          className="w-full h-full object-cover absolute top-6 left-6 rounded-br-4xl"
          src={myphoto}
          alt="Profile headshot"
        />
      </div>
    </div>
  );
};

export default Intro;
