import { motion } from "motion/react";
import Button from "../../ui/Button";
import AnimatedStar from "../../ui/AnimatedStar";

const ProfileDetails = () => {
  const spanStyle = "font-bold text-[#181a1c]";
  return (
    <div className="">
      <h3
        className=" mb-6 text-[18px] font-figtree font-black border-b-3 
        border-[#009688] w-fit"
      >
        ABOUT
      </h3>
      <div className="">
        <motion.p
          className="text-[20px] md:text-2xl mb-8 text-center md:text-start lg:text-justify"
          initial={{ y: "80%", opacity: [0] }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I’m Sarah Evbouan. I'm a frontend developer passionate about
          crafting <span className={spanStyle}>intuitive</span>, and{" "}
          <span className={spanStyle}>responsive</span> web applications using
          modern tools like React, JavaScript, and Tailwind CSS. I enjoy
          bringing <span className={spanStyle}>designs</span> to life,
          optimizing <span className={spanStyle}>performance</span>, and making
          digital experiences both functional and beautiful.
        </motion.p>
        <motion.div
          initial={{ y: "150%", opacity: 0.2 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center"
        >
          <Button>
            <AnimatedStar /> Get in touch <AnimatedStar />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfileDetails;
