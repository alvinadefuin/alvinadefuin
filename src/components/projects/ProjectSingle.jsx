import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const ProjectSingle = ({ title, category, image, url }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
        <div>
          <img
            src={image}
            className="rounded-t-xl border-none"
            alt="Single Project"
          />
        </div>
        <div className="text-center px-4 py-6">
          <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
            {title}
          </p>
          <span className="text-lg text-ternary-dark dark:text-ternary-light">
            {category}
          </span>
        </div>
        <div>
			<center>
          <a href={url} className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-10 duration-300">
            <i className="text-xl sm:text-xl md:text-3xl">
              <FiExternalLink />
            </i>
          </a>
		  <br></br>
		  </center>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectSingle;
