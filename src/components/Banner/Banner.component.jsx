import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./Banner.styles.css";
import "./Banner.styles.css";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <div className="wrapper">
                    <div className="static-txt">Hi!I'm Hadi,a</div>
                    <ul className="dynamic-txts">
                      <li>
                        <span>Web Developer</span>
                      </li>
                      <li>
                        <span>ReactJs</span>
                      </li>
                      <li>
                        <span>Developer</span>
                      </li>
                      {/* <li>
                        <span>Freelancer</span>
                      </li> */}
                    </ul>
                  </div>
                  <p>
                    Hello, my name is Hadi Soufan 2nd year Computer Science
                    Network Security faculty with 3/4 gpa. I have been learing
                    web development since March 2022. Gained skilles in html,
                    css, scss, javaScript, nodeJs, reactJs, and some typeSript
                    Skills.
                  </p>
                  <button onClick={() => console.log("connect")}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
