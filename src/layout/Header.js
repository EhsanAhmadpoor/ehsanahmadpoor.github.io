import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { activeSection } from "../utilits";
const Header = ({ blog }) => {
  const [sideBarToggle, setSideBarToggle] = useState(false);
  useEffect(() => {
    if (!blog) {
      activeSection();
    }
  }, []);
  return (
    <Fragment>
      <div className="mob-header">
        <div className="d-flex">
          <div className="navbar-brand">
            <Link href="/">
              <a className="logo-text">Ehsan Ahmadpoor</a>
            </Link>
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
      {/* End Header */}
      {/* nav bar */}
      <header
        className={`header-left ${sideBarToggle ? "menu-open menu-open-desk" : ""
          }`}
      >
        <div className="scroll-bar">
          <div className="hl-top">
            <div className="hl-logo">
              <div className="img">
                <img src="static/img/about-me.jpg" title="" alt="" />
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
        <a className="nav-link" href="#home">
          <i className="ti-home" />
          <span>Home</span>
        </a>
      </li>
      <li data-menuanchor="about" className="active">
        <a className="nav-link" href="#about">
          <i className="ti-user" />
          <span>About</span>
        </a>
      </li>
      <li data-menuanchor="research">
        <a className="nav-link" href="#researchInterests">
          <i className="ti-light-bulb" />
          <span className="smaller-text">Research Interests</span>
        </a>
      </li>
      <li data-menuanchor="experiences">
        <a className="nav-link" href="#experiences">
          <i className="ti-briefcase" />
          <span>Experiences</span>
        </a>
      </li>
      <li data-menuanchor="projects">
        <a className="nav-link" href="#projects">
          <i className="ti-agenda" />
          <span>Projects</span>
        </a>
      </li>
      <li data-menuanchor="contactme">
        <a className="nav-link" href="#contactMe">
          <i className="ti-map-alt" />
          <span>Contact Me</span>
        </a>
      </li>
    </ul>
  );
};
