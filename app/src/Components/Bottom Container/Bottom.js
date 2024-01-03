import "./Bottom.css";

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
          <a href="linkedin.com" className="social-element1">
            LinkedIn: Mark Rubin
          </a>
          <a href="github.com" className="social-element2">
            GitHub: markrubin920
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Bottom;
