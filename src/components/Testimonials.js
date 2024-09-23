import { Fragment } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid]);
const Testimonials = () => {
  const props = {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".owl-dots",
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2, spaceBetween: 25 },
    },
  };
  return (
    <section
      id="projects"
      data-nav-tooltip="Services"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>Projects.</h3>
        </div>
        <Swiper {...props}>
          <SwiperSlide className="testimonial-01 media">
            <div className="media-body">
              <h4>Diagnosis of Alzheimer&apos;s disease using deep neural networks through three-dimensional brain images.</h4>
              <h6>Bachelor Thesis
              </h6>
              <p>

              </p>

            </div>
            <a href="https://github.com/EhsanAhmadpoor" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" style={{ width: '10px', height: '10px' }} />
            </a>
          </SwiperSlide>
          <SwiperSlide className="testimonial-01 media">
            <div className="media-body">
              <h4>Keyword-Based Content Summarization Using RAG</h4>
              <h6>Natural Language Processing Course Project
              </h6>
              <p>
                • Developed a retriever and generator from scratch for book recommendations. <br />
                • Implemented a retrieval-augmented generation system to handle book recommendation queries.<br />
                • Models: <br />
                Retriever: sentence-transformers/all-MiniLM-L6-v2 <br />
                Generators: Microsoft Phi-3, GPT-2, T5<br />
                • Technologies: Python, Hugging Face, Transformers, Sentence-Transformers, Pandas
              </p>

            </div>
            <a href="https://github.com/EhsanAhmadpoor/NLP-RAG-Project" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" style={{ width: '10px', height: '10px' }} />
            </a>
          </SwiperSlide>
          <SwiperSlide className="testimonial-01 media">
            <div className="media-body">
              <h4>Question Answering on Persian Data</h4>
              <h6>Natural Language Processing Course Project
              </h6>
              <p>
                • Implemented and fine-tuned retrieval-augmented generation models for question answering on Persian text.<br />
                • Evaluated model performance using metrics such as accuracy, precision, recall, and F1-score.<br />
                • Models:<br />
                Retriever: all-MiniLM-L6-v2<br />
                Generator: GPT-2<br />
                • Technologies: Python, Transformers, Accelerate, Bitsandbytes, Hazm, Clean-Text, docx2txt
              </p>

            </div>
            <a href="https://github.com/EhsanAhmadpoor/NLP-QA-Project" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" style={{ width: '10px', height: '10px' }} />
            </a>
          </SwiperSlide>
          <SwiperSlide className="testimonial-01 media">
            <div className="media-body">
              <h4>Anti-Spoofing Algorithm for Facial Recognition: Liveliness Detection in Videos</h4>
              <h6>Computer Vision Course Project
              </h6>
              <p>
                • Developed a facial liveliness detection algorithm using a custom CNN architecture.<br />
                • Preprocessed video frames through resizing, normalization, and random frame extraction.<br />
                • Implemented additional feature extraction techniques including frequency domain analysis and Local Binary Patterns (LBP).<br />
                • Technologies: Python, TensorFlow, PyTorch, OpenCV, Scikit-Learn.
              </p>
            </div>
            <a href="https://github.com/EhsanAhmadpoor/Computer-Vision-Project" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" style={{ width: '10px', height: '10px' }} />
            </a>
          </SwiperSlide>
          <SwiperSlide className="testimonial-01 media">
            <div className="media-body">
              <h4>Grid-Based Pheromone Optimization Simulation</h4>
              <h6>Computational Intelligence Course Project
              </h6>
              <p>
                • Implemented a 5x5 grid with 5 balls and 5 holes randomly placed. <br />
                • Developed an agent to find and move balls to holes using a pheromone-based approach.<br />
                • Simulation displays the grid state, including agent, balls, and holes, after each move.<br />
                • Technologies: Python, NumPy
              </p>
            </div>
            <a href="https://github.com/EhsanAhmadpoor/Computational-Intelligence-Project" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" style={{ width: '10px', height: '10px' }} />
            </a>
          </SwiperSlide>
          <SwiperSlide className="testimonial-01 media">
            <div className="media-body">
              <h4>Tascrum: AI-Enhanced Project Management Tool</h4>
              <h6>Software Engineering Course Project
              </h6>
              <p>
                • Contributed to the front-end development of Tascrum, a project management platform similar to Trello, featuring an integrated AI chatbot and
                burndown chart for enhanced project tracking and communication.<br />
                • Played a key role in testing and containerizing the application using Docker, ensuring smooth development workflows and deployment
                processes.
              </p>
            </div>
            <a href="https://github.com/G-force-Software-Engineering-gp" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" style={{ width: '10px', height: '10px' }} />
            </a>
          </SwiperSlide>
          <SwiperSlide className="testimonial-01 media">
            <div className="media-body">
              <h4>Barba: Salon Management Platform</h4>
              <h6>System Design and Analysis Course Project
              </h6>
              <p>
                • Contributed to the development of Barba, a platform where users can discover salons, book services like hair and skincare, while
                barbers and salon managers can manage their clients and operations.<br />
                • Utilized React, Tailwind CSS, HTML5, CSS3, and JavaScript to build responsive and interactive user interfaces
              </p>
            </div>
            <a href="https://github.com/Untitled-IUST" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" style={{ width: '10px', height: '10px' }} />
            </a>
          </SwiperSlide>
          <SwiperSlide className="testimonial-01 media">
            <div className="media-body">
              <h4>Theory of languages and Automata</h4>
              <h6>TLA Course Projects
              </h6>
              <p>
                Developed a project for the Theory of Languages and Automata course, focusing on finite automata, regular languages, grammars, and pushdown automata.
                Implemented automata transformations, language operations, and grammar verification techniques.
              </p>
            </div>
            <a href="https://github.com/EhsanAhmadpoor/TLA-Projects" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" style={{ width: '10px', height: '10px' }} />
            </a>
          </SwiperSlide>
        </Swiper>
        <div className="owl-dots"></div>
      </div>
    </section>
  );
};
export default Testimonials;
