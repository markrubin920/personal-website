import "./Bottom.css";

const Bottom = () => {
  return (
    <footer className="footer-div">
      <a href="mailto:markrubin920@gmail.com" className="email">
        Website by Mark Rubin. Email me at markrubin920@gmail.com
      </a>
      <ul className="contact-ul">
        <li>
          <a href="linkedin.com" className="contact-li">
            LinkedIn: Mark Rubin
          </a>
        </li>
        <li>
          <a href="github.com" className="contact-li">
            GitHub: markrubin920
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Bottom;
