import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navigation from "../../Components/Navigation/Navigation";
import Bottom from "../../Components/Bottom Container/Bottom";
import "../../Root/Root.css";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uc5w0ob",
        "template_pqm4r3d",
        form.current,
        process.env.EMAILJS_API_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <header className="nav-background">
        <Navigation />
      </header>
      <section className="contact-me-container">
        <div className="contact-me-card">
          <h1 className="contact-me-h1">Contact Me</h1>
          <form ref={form} onSubmit={sendEmail}>
            <div className="name-input-div">
              <input
                placeholder="Fist Name"
                name="first_name"
                className="input"
                required
              ></input>
              <input
                placeholder="Last Name"
                name="last_name"
                className="input"
                required
              ></input>
            </div>

            <div className="email-input-div">
              <input
                placeholder="Email Address"
                className="input"
                name="user_email"
                required
              ></input>
            </div>
            <div className="message-div">
              <textarea
                placeholder="Message"
                className="message"
                name="message"
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
