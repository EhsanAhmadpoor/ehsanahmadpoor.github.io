import React, { Suspense } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import TypingAnimation from './components/TypingAnimation';
import Layout from './layout/Layout';

// Lazy load Portfolio and Testimonials components
const Portfolio = React.lazy(() => import('./components/Portfolio'));
const Testimonials = React.lazy(() => import('./components/Testimonials'));

function Home() {
  return (
    <Layout>
      {/* Home Section */}
      <section id="home" className="pp-section pp-scrollable">
        <div className="home-banner">
          <div className="container">
            <div className="row full-screen align-items-center">
              <div className="col-lg-6">
                <div className="type-box">
                  <h6>Hello, I am</h6>
                  <h1 className="font-alt">Ehsan Ahmadpoor</h1>
                  <p className="lead">
                    I'm a Passionate <TypingAnimation />
                  </p>
                  <p className="desc">
                    I'm a Computer Engineering student at Iran University of Science and Technology with a GPA of 3.75 in the last 60 credits. I’m passionate about challenges, problem-solving, and exploring the latest tech through research. Feel free to explore my website and check out the projects I’ve been working on!
                  </p>
                  <div className="btn-bar">
                    <a className="px-btn px-btn-theme" href="/static/files/CV.pdf" download>
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hb-img">
                  <img
                    src="static/img/home-banner.jpg"
                    alt=""
                    style={{
                      width: '100%',          // Make the image take the full width
                      height: 'auto',         // Maintain the aspect ratio
                      maxWidth: '540px',      // Limit the maximum width
                      objectFit: 'cover',     // Cover the container without stretching
                      display: 'block',        // Ensure no extra space below the image
                      margin: '0 auto'        // Center the image horizontally
                    }}
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Portfolio Section (Lazy Loaded) */}
      <Suspense fallback={<div>Loading Portfolio...</div>}>
        <Portfolio />
      </Suspense>

      {/* Testimonials Section (Lazy Loaded) */}
      <Suspense fallback={<div>Loading Testimonials...</div>}>
        <Testimonials />
      </Suspense>

      {/* Contact Section */}
      <Contact />
    </Layout>
  );
}

export default Home;
