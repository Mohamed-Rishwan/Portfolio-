import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Projects.css';

// Project data
const projects = [
  {
    id: 1,
    title: "Lottery System Management",
    category: "Web App",
    image: "https://www.gammastack.com/wp-content/uploads/2023/01/Lottery-Management-Software.png",
    description: "A comprehensive dashboard for e-commerce store management with real-time analytics and inventory tracking.",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    link: "#"
  },
  {
    id: 2,
    title: "Energu Theft Dectection",
    category: "Web Design",
    image: "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "A modern blogging platform designed for travel enthusiasts to share their experiences and connect with others.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Supabase"],
    link: "#"
  },
  {
    id: 3,
    title: "Adaptive Email App",
    category: "Mobile App",
    image: "https://images.pexels.com/photos/6389974/pexels-photo-6389974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "A cross-platform fitness application that helps users track workouts, nutrition, and progress over time.",
    technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
    link: "#"
  },
  {
    id: 4,
    title: "Corporate Website Redesign",
    category: "Web Design",
    image: "https://images.pexels.com/photos/5059013/pexels-photo-5059013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "A complete redesign of a corporate website focusing on improved user experience and conversion rates.",
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "WordPress"],
    link: "#"
  }
];

// Filter categories
const categories = ["All", "Web Design", "Web App", "Mobile App"];

function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="project-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="project-modal"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            onClick={e => e.stopPropagation()}
          >
            <button className="modal-close-btn" onClick={onClose} aria-label="Close">
              &times;
            </button>
            
            <div className="modal-image">
              <img src={project.image} alt={project.title} />
            </div>
            
            <div className="modal-content">
              <h3>{project.title}</h3>
              <p className="modal-category">{project.category}</p>
              <p className="modal-description">{project.description}</p>
              
              <div className="modal-technologies">
                <h4>Technologies Used</h4>
                <div className="tech-tags">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <a href={project.link} className="button primary-button" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ProjectCard({ project, onClick }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div 
      ref={ref}
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      onClick={() => onClick(project)}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <div className="project-overlay-content">
            <h3>{project.title}</h3>
            <p>{project.category}</p>
            <span className="view-details">View Details</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-title">
          <h2>My Projects</h2>
        </div>
        
        <div className="project-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="project-grid">
          {filteredProjects.map(project => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={handleProjectClick}
            />
          ))}
        </div>
      </div>
      
      <ProjectModal 
        project={selectedProject} 
        isOpen={modalOpen} 
        onClose={closeModal}
      />
    </section>
  );
}

export default Projects;