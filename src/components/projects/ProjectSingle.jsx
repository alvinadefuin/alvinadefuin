import { Tooltip } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .MuiTooltip-tooltip`]: {
    backgroundColor: "rgba(51, 51, 51, 0.8)",
    color: "#fff",
    fontSize: "14px",
    padding: "10px",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  },
  [`& .MuiTooltip-arrow`]: {
    color: "rgba(51, 51, 51, 0.8)",
  },
});

const ProjectSingle = ({ title, category, image, url, description }) => {
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
        <CustomTooltip title={description} arrow>
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
              <a
                href={url}
                className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-10 duration-300"
              >
                <i className="text-xl sm:text-xl md:text-3xl">
                  <FiExternalLink />
                </i>
              </a>
              <br></br>
            </center>
          </div>
        </CustomTooltip>
      </div>
    </motion.div>
  );
};

export default ProjectSingle;
