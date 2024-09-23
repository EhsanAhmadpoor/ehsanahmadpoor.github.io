import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet'; // React Helmet for meta data
import Home from './Home'; // Importing the Home page component directly
import './styles/globals.css'; // Global CSS import

function App() {
  return (
    <Fragment>
      <Helmet>
        <title>Ehsan Ahmadpoor - Portfolio</title>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link href="static/plugin/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="static/plugin/font-awesome/css/all.min.css" rel="stylesheet" />
        <link href="static/plugin/et-line/style.css" rel="stylesheet" />
        <link href="static/plugin/themify-icons/themify-icons.css" rel="stylesheet" />
        <link href="static/plugin/owl-carousel/css/owl.carousel.min.css" rel="stylesheet" />
        <link href="static/plugin/magnific/magnific-popup.css" rel="stylesheet" />
        <link href="static/plugin/scroll/jquery.mCustomScrollbar.min.css" rel="stylesheet" />
        <link href="static/css/style.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700&display=swap" rel="stylesheet" />
      </Helmet>

      {/* Main Home Component */}
      <Home />
    </Fragment>
  );
}

export default App;
