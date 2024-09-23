import { Fragment, useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll"; // For smooth scrolling
import { activeSection } from "../utilits"; // Ensure this is handled for active section highlighting

const Header = () => {
  const [sideBarToggle, setSideBarToggle] = useState(false);

  useEffect(() => {
    activeSection(); // Assuming this adds active state tracking for your sections
  }, []);

  return (
    <Fragment>
      <div className="mob-header">
        <div className="d-flex">
          <div className="navbar-brand">
            <a className="logo-text" href="#home">Ehsan Ahmadpoor</a>
          </div>
          <button
            className={`toggler-menu ${sideBarToggle ? "open" : ""}`}
            onClick={() => setSideBarToggle(!sideBarToggle)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Sidebar navigation */}
      <header className={`header-left ${sideBarToggle ? "menu-open menu-open-desk" : ""}`}>
        <div className="scroll-bar">
          <div className="hl-top">
            <div className="hl-logo">
              <div className="img">
                <img src="static/img/about-me.jpg" alt="Ehsan Ahmadpoor" />
              </div>
              <h5>Ehsan Ahmadpoor</h5>
            </div>
          </div>
          <MenuWithOutBlog />
        </div>

        <div className="nav justify-content-center social-icons">
          <a href="https://www.linkedin.com/in/ehsan-ahmadpoor/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in" />
          </a>
          <a href="https://github.com/EhsanAhmadpoor" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" />
          </a>
          <a href="mailto:ehsan_ahmadpoor@comp.iust.ac.ir">
            <i className="fas fa-envelope" />
          </a>
          <a href="https://www.instagram.com/naznin.glp?igsh=ZHNjdTQ0NXhxYWsx" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-heart" /> {/* Heart icon */}
          </a>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;

const MenuWithOutBlog = () => {
  return (
    <ul className="nav nav-menu" id="pp-menu">
      <li data-menuanchor="home" className="active">
        <ScrollLink
          className="nav-link"
          to="home"
          smooth={true}
          duration={100}
          offset={-50} // Adjust offset as needed to align with top of sections
        >
          <i className="ti-home" />
          <span>Home</span>
        </ScrollLink>
      </li>

      <li data-menuanchor="about">
        <ScrollLink
          className="nav-link"
          to="about"
          smooth={true}
          duration={100}
          offset={-50}
        >
          <i className="ti-user" />
          <span>About</span>
        </ScrollLink>
      </li>

      <li data-menuanchor="research">
        <ScrollLink
          className="nav-link"
          to="researchInterests"
          smooth={true}
          duration={100}
          offset={-50}
        >
          <i className="ti-light-bulb" />
          <span className="smaller-text">Research Interests</span>
        </ScrollLink>
      </li>

      <li data-menuanchor="experiences">
        <ScrollLink
          className="nav-link"
          to="experiences"
          smooth={true}
          duration={100}
          offset={-50}
        >
          <i className="ti-briefcase" />
          <span>Experiences</span>
        </ScrollLink>
      </li>

      <li data-menuanchor="projects">
        <ScrollLink
          className="nav-link"
          to="projects"
          smooth={true}
          duration={100}
          offset={-50}
        >
          <i className="ti-agenda" />
          <span>Projects</span>
        </ScrollLink>
      </li>

      <li data-menuanchor="contactme">
        <ScrollLink
          className="nav-link"
          to="contactMe"
          smooth={true}
          duration={100}
          offset={-50}
        >
          <i className="ti-map-alt" />
          <span>Contact Me</span>
        </ScrollLink>
      </li>
    </ul>
  );
};
