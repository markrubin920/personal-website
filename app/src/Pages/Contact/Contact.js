import Navigation from "../../Components/Navigation/Navigation";
import Bottom from "../../Components/Bottom Container/Bottom";
import "../../Root/Root.css";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <header className="nav-background">
        <Navigation />
      </header>
      <section className="contact-me-container">
        <div className="contact-me-card">
          <h1 className="contact-me-h1">Contact Me</h1>
          <form>
            <div className="name-input-div">
              <input placeholder="Fist Name" className="input" required></input>
              <input placeholder="Last Name" className="input" required></input>
            </div>

            <div className="email-input-div">
              <input
                placeholder="Email Address"
                className="input"
                required
              ></input>
            </div>
            <div className="message-div">
              <textarea
                placeholder="Message"
                className="message"
                required
              ></textarea>
            </div>
            <div className="submit-button-div">
              <button className="submit-button">Submit</button>
            </div>
          </form>
        </div>
      </section>
      <footer className="footer-container">
        <Bottom />
      </footer>
    </div>
  );
};

export default Contact;
