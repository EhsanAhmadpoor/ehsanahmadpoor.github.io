import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faBrain,
  faEye,
  faNetworkWired,
  faRobot,
  faChartLine,
  faCode,
} from "@fortawesome/free-solid-svg-icons";


const Services = () => {
  return (
    <section
      id="researchInterests"
      data-nav-tooltip="Services"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>Research Interests</h3>
        </div>
        <div className="row">
          {/* NLP Section */}
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              {/* <i className="icon theme-bg icon-speech-bubble" /> */}
              <FontAwesomeIcon icon={faComments} className="icon theme-bg" />
              {/* icon for NLP */}
              <div className="feature-content media-body">
                <h5>Natural Language Processing</h5>
                <p>
                  Question Answering Systems, Language Modeling, Dialog Systems and Chatbots, Information Retrieval and Extraction
                </p>
              </div>
            </div>
          </div>
          {/* Machine Learning Section */}
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              {/* <i className="icon theme-bg icon-brain" /> icon for Machine Learning */}
              <FontAwesomeIcon icon={faBrain} className="icon theme-bg" />
              <div className="feature-content media-body">
                <h5>Machine Learning</h5>
                <p>
                  Hyperparameter Optimization, Reinforcement Learning, Neural Network Architectures, RNNs, GANs, Transfer Learning
                </p>
              </div>
            </div>
          </div>
          {/* Computer Vision Section */}
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              {/* <i className="icon theme-bg icon-eye" /> icon for Computer Vision */}
              <FontAwesomeIcon icon={faEye} className="icon theme-bg" />
              <div className="feature-content media-body">
                <h5>Computer Vision</h5>
                <p>
                  Object Detection and Recognition, Image Segmentation, Medical Image Analysis, 3D Vision
                </p>
              </div>
            </div>
          </div>
          {/* Deep Learning Section */}
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              {/* <i className="icon theme-bg icon-neural-network" /> icon for Deep Learning */}
              <FontAwesomeIcon icon={faNetworkWired} className="icon theme-bg" />
              <div className="feature-content media-body">
                <h5>Deep Learning</h5>
                <p>
                  Neural Network Architectures, RNNs, GANs, Transfer Learning, Self-Supervised Learning
                </p>
              </div>
            </div>
          </div>
          {/* Artificial Intelligence Section */}
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              {/* <i className="icon theme-bg icon-ai" /> icon for AI */}
              <FontAwesomeIcon icon={faRobot} className="icon theme-bg" />
              <div className="feature-content media-body">
                <h5>Artificial Intelligence</h5>
                <p>
                  {/* Add relevant content here */}
                </p>
              </div>
            </div>
          </div>
          {/* Data Science Section */}
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              {/* <i className="icon theme-bg icon-graph" /> icon for Data Science */}
              <FontAwesomeIcon icon={faChartLine} className="icon theme-bg" />
              <div className="feature-content media-body">
                <h5>Data Science</h5>
                <p>
                  {/* Add relevant content here */}
                </p>
              </div>
            </div>
          </div>
          {/* Software Engineering Section */}
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              {/* <i className="icon theme-bg icon-code" /> icon for Software Engineering */}
              <FontAwesomeIcon icon={faCode} className="icon theme-bg" />
              <div className="feature-content media-body">
                <h5>Software Engineering</h5>
                <p>
                  {/* Add relevant content here */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
