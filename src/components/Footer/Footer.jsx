import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <span>Portfolio</span>
          </div>
          
          <p className="footer-text">
            Creating elegant web experiences with passion and precision.
          </p>
          
          <div className="footer-nav">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          
          <div className="footer-copyright">
            <p>&copy; {currentYear} Mohamed Rishwan A. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;