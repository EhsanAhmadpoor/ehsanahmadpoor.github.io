const About = () => {
  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
        <div className="title">
          <h3>Education &amp; Skills</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 m-15px-tb">
            <ul className="aducation-box">
              <li>
                <span>Sep. 2020-Present</span>
                <h6>B.Sc. of Computer Engineering</h6>
                <p>Iran University of Science and Technology</p>
              </li>
              <li>
                <span>2016-2020</span>
                <h6>High School Diploma in Mathematics and Physics</h6>
                <p>Allame Helli 2 High School</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 ml-auto m-15px-tb">
            <div className="skills-box">
              <h3>My skills</h3>
              <div className="skill-lt">
                <h6>Machine Learning & AI: Python, PyTorch, Scikit-learn, Transformers</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "92%" }}>
                    <span data-toggle="tooltip" title="92%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>NLP: Hazm, Clean-Text, Transformers</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "90%" }}>
                    <span data-toggle="tooltip" title="90%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Deep Learning & Computer Vision: PyTorch, TensorFlow, OpenCV</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "93%" }}>
                    <span data-toggle="tooltip" title="93%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Software Engineering & DevOps: Object-oriented design patterns, software development methodologies (Agile, Scrum), Docker, Kubernetes</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "88%" }}>
                    <span data-toggle="tooltip" title="88%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
