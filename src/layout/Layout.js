import { Fragment } from "react";
import DayNightMood from "./DayNightMood";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <Fragment>
      {/* The Header includes the navigation and logo */}
      <Header />

      {/* Main content area where different sections of the page are displayed */}
      <main className="main-left pp-main-section">
        {children}
      </main>

      {/* Dark/Light mode toggle component */}
      <DayNightMood />
    </Fragment>
  );
};

export default Layout;
