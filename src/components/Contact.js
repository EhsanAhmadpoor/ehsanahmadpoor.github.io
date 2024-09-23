import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { name, email, message, subject } = mailData;
  const [error, setError] = useState(null);

  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message || !subject) {
      setError("Please fill out all required fields.");
      clearError();
    } else {
      emailjs
        .send(
          "service_6c2j64a",
          "template_f9em1jh",
          mailData,
          "WAqgvUM5Qk0zSYYhB"
        )
        .then(
          () => {
            setError(false);
            clearError();
            setMailData({ name: "", email: "", message: "", subject: "" });
          },
          (err) => {
            console.error(err.text);
            setError("Failed to send message. Please try again.");
            clearError();
          }
        );
    }
  };

  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };

  return (
    <section
      id="contactMe"
      data-nav-tooltip="Contact Me"
      className="pp-section pp-scrollable section dark-bg"
    >
      <div className="container">
        <div className="title">
          <h3>Get in touch.</h3>
        </div>
        <div className="row">
          <div className="col-lg-5 col-xl-4 m-15px-tb">
            <div className="contact-info">
              <h4>Let's Connect</h4>
              <p>
                I'm currently a computer engineering student in my last semester, preparing to pursue a master’s degree. If you’d like to discuss opportunities or collaboration, feel free to reach out!
              </p>
              <ul>
                <li className="media">
                  <i className="ti-map" />
                  <span className="media-body">
                    School of Computer Engineering, University of Science and Technology of Iran, University St., Hengam St., Resalat Square, Tehran, Iran. Postal Code: 16846-13114
                  </span>
                </li>
                <li className="media">
                  <i className="ti-email" />
                  <span className="media-body smaller-email-text">ehsan_ahmadpoor@comp.iust.ac.ir</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-7 col-xl-8 m-15px-tb">
            <div className="contact-form">
              <h4>Say Something</h4>
              <form id="contact-form" onSubmit={onSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="name"
                        onChange={onChange}
                        value={name}
                        id="name"
                        placeholder="Name *"
                        className={`form-control ${error ? (!name ? "invalid" : "") : ""}`}
                        type="text"
                        aria-required="true"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="email"
                        onChange={onChange}
                        value={email}
                        id="email"
                        placeholder="Email *"
                        className={`form-control ${error ? (!email ? "invalid" : "") : ""}`}
                        type="email"
                        aria-required="true"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        name="subject"
                        onChange={onChange}
                        value={subject}
                        id="subject"
                        placeholder="Subject *"
                        className={`form-control ${error ? (!subject ? "invalid" : "") : ""}`}
                        type="text"
                        aria-required="true"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        onChange={onChange}
                        value={message}
                        id="message"
                        placeholder="Your message *"
                        rows={5}
                        className={`form-control ${error ? (!message ? "invalid" : "") : ""}`}
                        aria-required="true"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="send">
                      <input
                        className="px-btn px-btn-theme"
                        type="submit"
                        value="Send Message"
                      />
                    </div>
                    {error !== null && (
                      <span className={`text-${error ? "danger" : "success"}`}>
                        {error ? error : "Message Sent Successfully"}
                      </span>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12">
            <div className="google-map">
              <div className="embed-responsive embed-responsive-21by9">
                <iframe
                  className="embed-responsive-item"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.3757999748664!2d51.504768911369695!3d35.74156697245337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e032e4dab694f%3A0x7c779a1cc0e0d4c9!2sSchool%20of%20Computer%20Engineering!5e0!3m2!1sen!2sde!4v1727024808341!5m2!1sen!2sde"
                  allowFullScreen=""
                  loading="lazy"
                  title="Location Map"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
