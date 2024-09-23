const About = () => {
  // Skill data array for easy management
  const skills = [
    {
      title: "Machine Learning & AI: Python, PyTorch, Scikit-learn, Transformers",
      proficiency: 92,
    },
    {
      title: "NLP: Hazm, Clean-Text, Transformers",
      proficiency: 90,
    },
    {
      title: "Deep Learning & Computer Vision: PyTorch, TensorFlow, OpenCV",
      proficiency: 93,
    },
    {
      title:
        "Software Engineering & DevOps: Object-oriented design patterns, software development methodologies (Agile, Scrum), Docker, Kubernetes",
      proficiency: 88,
    },
  ];

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
              <h3>My Skills</h3>
              {skills.map((skill, index) => (
                <div className="skill-lt" key={index}>
                  <h6>{skill.title}</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: `${skill.proficiency}%` }}>
                      <span data-toggle="tooltip" title={`${skill.proficiency}%`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
