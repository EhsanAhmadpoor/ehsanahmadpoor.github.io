import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
const Isotope = dynamic(() => import("isotope-layout"), { ssr: false });

const Portfolio = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("education");
  useEffect(() => {
    if (Isotope && typeof window !== "undefined") {
      isotope.current = new Isotope(".portfolio-content", {
        itemSelector: ".grid-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }
    isotope.current.arrange({ filter: `.${filterKey}` });

    return () => isotope.current.destroy();
  });
  useEffect(() => {
    if (isotope.current) {
      isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <section
      id="experiences"
      data-nav-tooltip="Work"
      className="pp-section pp-scrollable section dark-bg"
    >
      <div className="container">
        <div className="title">
          <h3>Experiences.</h3>
        </div>
        <div className="portfolio-filter-01">
          <ul className="filter nav">
            <li
              className={`c-pointer ${activeBtn("education")}`}
              onClick={handleFilterKeyChange("education")}
              data-filter=".education"
            >
              Education
            </li>
            <li
              className={`c-pointer ${activeBtn("research")}`}
              onClick={handleFilterKeyChange("research")}
              data-filter=".research"
            >
              Research Assistant
            </li>
            <li
              className={`c-pointer ${activeBtn("TA")}`}
              onClick={handleFilterKeyChange("TA")}
              data-filter=".TA"
            >
              Teaching Assistant
            </li>
            <li
              className={`c-pointer ${activeBtn("work")}`}
              onClick={handleFilterKeyChange("work")}
              data-filter=".work"
            >
              Work
            </li>
          </ul>
        </div>{" "}
        {/* Portfolio Filter */}
        <div className="resume-box portfolio-content ">
          <div className="resume-row grid-item education">
            <div className="row">

              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Diploma in Mathematics and Physics</h6>
                  <label>Allame Helli 2 High School | 2016 - 2020</label>
                  <p>
                    • Diploma in Mathematics and Physics.<br />
                    • Affiliated with the National Organization for Development of Exceptional Talents.<br />
                    • CGPA: 4/4 (19.23/20)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row  grid-item education">
            <div className="row">

              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>B.Sc. in Computer Engineering</h6>
                  <label>Iran University of Science and Technology | Sep 2020 - Present</label>
                  <p>
                    • GPA of last 60 units: 3.75/4 (17.5/20) <br />
                    • CGPA: 3.32/4 (16.26/20)<br />
                    • Related Courses: Natural Language Processing (4/4), Computational Intelligence (4/4), Computer Vision (4/4), Data Science (4/4),
                    Software Engineering (4/4), Compiler Design (4/4), Graph Theory and Algorithms (4/4), Security of Computer Systems (4/4)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row  grid-item research">
            <div className="row">

              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Computer Vision Research Assistant</h6>
                  <label>Bachelor Thesis | April 2024 - Present</label>
                  <p>
                    • Thesis Title: Diagnosis of Alzheimer&apos;s disease using deep neural networks through three-dimensional brain images.
                    • Supervisor: Dr. Mohsen Soryani
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row  grid-item work">
            <div className="row">

              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Junior Software Engineer</h6>
                  <label>Bale |  June 2024 - Present</label>
                  <p>
                    • Attending several workshops including Redux, RxJs, Testing, Git, Debugging, etc <br />
                    • Developing a whole Issue tracking project from scratch using React, Typescript, Redux and RxJs <br />
                    • Adopting top-notch technologies that we were taught during the summer camp
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row  grid-item work">
            <div className="row">

              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Front End Bootcamp Instructor Summer</h6>
                  <label>CESA | Summer 2024</label>
                  <p>
                    • Teaching and mentoring students in Front-end development. <br />
                    • Developing hands-on exercises and projects alongside a team of seven to enhance students&apos; practical skills.<br />
                    • Collaborating with the Faculty of Computer Engineering to improve students&apos; knowledge through interactive lessons and coding
                    challenges.<br />
                    • Supporting and guiding students through real-world scenarios to prepare them for industry challenges.<br />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row  grid-item TA">
            <div className="row">

              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Software Engineering Teaching Assistant</h6>
                  <label>Dr. Mehrdad Ashtiani | Fall 2024</label>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row  grid-item TA">
            <div className="row">

              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Artificial Intelligence Teaching Assistant</h6>
                  <label>Dr. Mohammad Reza Mohammadi | Fall 2024</label>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row  grid-item TA">
            <div className="row">

              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Operating Systems Teaching Assistant</h6>
                  <label>Dr. Reza Entezari-Maleki | Fall 2024</label>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row  grid-item TA">
            <div className="row">

              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Advanced Programming Teaching Assistant</h6>
                  <label>Dr. Marzieh Malekimajd | Fall 2024</label>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row  grid-item TA">
            <div className="row">

              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Advanced Programming Teaching Assistant</h6>
                  <label>Dr. Sauleh Eetemadi | Spring 2024</label>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row  grid-item TA">
            <div className="row">

              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Advanced Programming Teaching Assistant</h6>
                  <label>Dr. Marzieh Malekimajd | Spring 2024</label>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row  grid-item TA">
            <div className="row">

              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Advanced Programming Teaching Assistant</h6>
                  <label>Dr. Marzieh Davoodabadi | Spring 2024</label>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row  grid-item TA">
            <div className="row">

              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Fundamentals of Computer Programming Teaching Assistant</h6>
                  <label>Dr. Mehrdad Ashtiani | Spring 2024</label>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row  grid-item TA">
            <div className="row">

              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Discrete Mathematics Teaching Assistant</h6>
                  <label>Dr. Marzieh Davoodabadi | Spring 2024</label>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row  grid-item TA">
            <div className="row">

              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Design Algorithms Teaching Assistant</h6>
                  <label>Dr. Farzaneh Ghayour Baghbani| Fall 2023</label>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row  grid-item TA">
            <div className="row">

              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Fundamentals of Computer Programming Teaching Assistant</h6>
                  <label>Dr. Marzieh Davoodabadi | Fall 2023</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
