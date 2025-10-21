import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const ProjectSingle = ({ title, category, image, url, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: 0.1,
      }}
      className="group"
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-2xl overflow-hidden bg-secondary-light dark:bg-secondary-dark border border-ternary-light dark:border-ternary-dark hover:border-accent-light dark:hover:border-accent-dark transition-all duration-300 hover:shadow-2xl"
      >
        <div className="relative overflow-hidden aspect-video">
          <img
            src={image}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            alt={title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
            <div className="flex items-center gap-2 text-white">
              <span className="text-sm font-medium">View Project</span>
              <FiExternalLink className="w-4 h-4" />
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="mb-2">
            <span className="inline-block px-3 py-1 bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark text-xs font-medium rounded-full">
              {category}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-2 group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors">
            {title}
          </h3>
          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark line-clamp-2">
            {description}
          </p>
        </div>
      </a>
    </motion.div>
  );
};

export default ProjectSingle;
