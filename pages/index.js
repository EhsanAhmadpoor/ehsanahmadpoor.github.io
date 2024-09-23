import dynamic from "next/dynamic";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Services from "../src/components/Services";
import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout";
import Portfolio from "../src/components/Portfolio";
import Testimonials from "../src/components/Testimonials";

// const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
//   ssr: false,
// });
// const Testimonials = dynamic(() => import("../src/components/Testimonials"), {
//   ssr: false,
// })
const Index = () => {
  return (
    <Layout>
      <section
        id="home"
        data-nav-tooltip="Home"
        className="pp-section pp-scrollable"
      >
        <div className="home-banner">
          <div className="container">
            <div className="row full-screen align-items-center">
              <div className="col-lg-6">
                <div className="type-box">
                  <h6>Hello, I am</h6>
                  <h1 className="font-alt">Ehsan Ahmadpoor</h1>
                  <p className="lead">
                    I&apos;m a Passionate <TypingAnimation />
                  </p>
                  <p className="desc">
                    I&apos;m a Computer Engineering student at Iran University of Science and Technology with a GPA of 3.75 in the last 60 credits. I’m passionate about challenges, problem-solving, and exploring the latest tech through research. Feel free to explore my website and check out the projects I’ve been working on!
                  </p>
                  <div className="btn-bar">
                    <a className="px-btn px-btn-theme" href="/static/files/CV.pdf" download>
                      Donwload CV
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hb-img">
                  <img style={{ maxWidth: '540px', objectFit: "cover" }} src="static/img/home-banner.jpg" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
    </Layout>
  );
};
export default Index;
