import "./Bottom.css";

// Bottom container to be present at the bottom of each page
const Bottom = () => {
  return (
    <footer className="footer">
      <div className="footer-div">
        <div className="email">
          <a href="mailto:markrubin920@gmail.com" className="contact-email">
            Website by Mark Rubin. Email me at markrubin920@gmail.com
          </a>
        </div>
        <div className="socials">
          <a
            href="https://www.linkedin.com/in/markrubin10/"
            className="social-element1"
          >
            LinkedIn: Mark Rubin
          </a>
          <a href="https://github.com/markrubin920" className="social-element2">
            GitHub: markrubin920
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Bottom;
