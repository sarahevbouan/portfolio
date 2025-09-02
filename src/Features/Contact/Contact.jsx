import Button from "../../ui/Button";
import AnimatedStar from "../../ui/AnimatedStar";

const Contact = ({ registerSectionNode }) => {
  return (
    <div
      ref={(el) => registerSectionNode("contact", el)}
      className="text-center px-6 md:w-[100%] pb-[8rem]
       [&>*]:w-[90%] [&>*]:md:w-[70%] [&>*]:lg:w-[55%]
       [&>*]:mx-auto scroll-mt-24 
       "
      id="contact"
    >
      <p className="text-4xl sm:text-6xl md:text-8xl mb-4 font-figtree font-medium">
        Have a project in mind?
      </p>
      <p className="mb-8 text-[#181a1c] dark:text-stone-50">
        Reach out at sarahevbouan@gmail.com
      </p>
      <Button>
        <AnimatedStar /> Let's talk <AnimatedStar />
      </Button>
    </div>
  );
};

export default Contact;
