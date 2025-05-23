import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
        </div>
        
        <motion.div 
          ref={ref}
          className="about-content"
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="about-image">
            <div className="image-placeholder">
              <span>About</span>
            </div>
          </div>
          
          <div className="about-text">
            <p className="about-intro">
              Hello! I'm Rishwan, a passionate fullstack developer based in Tamilnadu, India.
            </p>
            
            <p>
              I specialize in creating beautiful, functional, and user-centered digital experiences. 
              With 5 years of experience in the field, I've had the privilege of working with diverse clients 
              from startups to large corporations.
            </p>
            
            <p>
              My journey in web development started when I was in college, experimenting with HTML and CSS. 
              What began as curiosity quickly evolved into a passion that led me to pursue a career in this ever-evolving field.
            </p>
            
            <div className="about-details">
              <div className="about-detail">
                <span className="detail-label">Name:</span>
                <span className="detail-value">Mohamed Rishwan A</span>
              </div>
              
              <div className="about-detail">
                <span className="detail-label">Email:</span>
                <span className="detail-value">mohamedrishwan816@gmail.com</span>
              </div>
              
              <div className="about-detail">
                <span className="detail-label">Location:</span>
                <span className="detail-value">Tenkasi</span>
              </div>
              
              <div className="about-detail">
                <span className="detail-label">Availability:</span>
                <span className="detail-value available">Available for freelance</span>
              </div>
            </div>
            
            <div className="about-cta">
              <a href="#contact" className="button primary-button">Contact Me</a>
              <a href="#" className="button secondary-button">Download CV</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;