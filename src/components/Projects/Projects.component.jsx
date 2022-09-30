import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../ProjectCard/ProjectCard.component";
import projImg1 from "../../assets/img/project-img1.png";
import projImg2 from "../../assets/img/project-img2.png";
import projImg3 from "../../assets/img/project-img3.png";
import projImg4 from "../../assets/img/project-img4.png";
import projImg5 from "../../assets/img/project-img5.png";
import projImg6 from "../../assets/img/project-img6.png";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./Projects.styles.css";

export const Projects = () => {
  const projects = [
    {
      title: "Bankist",
      description: "Simplere banking experience for a simpler life",
      imgUrl: projImg1,
      link: "https://6336d94ed383c4166519a78e--delicate-ganache-1a6bd9.netlify.app/",
    },
    {
      title: "Dosa Food",
      description: "Imaginary website for delivering healthy food",
      imgUrl: projImg2,
      link: "https://63366df234be44271395a540--soft-sawine-4db09b.netlify.app/",
    },
    {
      title: "Mapty",
      description: "Website using only javaScript to track your Sports Journey",
      imgUrl: projImg3,
      link: "https://6336700834be44282395a729--golden-bienenstitch-435a6b.netlify.app/",
    },
    {
      title: "eGlow Website",
      description: "eCommerce website for selling clothe and shoes",
      imgUrl: projImg4,
    },
    {
      title: "House Market App",
      description: "reactJs app for selling and renting houses and condo",
      imgUrl: projImg5,
    },
    {
      title: "KAYAK",
      description: "javaScript website for travelling and tousrim ",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    The design of these projects where from real websites. All
                    the functiones where written by me with the help of the
                    documentation and stackOverFlow. Some Youtube videos.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          The aim for developing these projects was first for
                          fun, but later on I liked this domain so I went deeper
                          with the fundemantels of javaScript (map, filter,
                          promises, fetching API, syncronous and asyncronous
                          coding styles)
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          The process of learing first was so difficult, but
                          with potential and diversity of resources the tech and
                          the theory side of javaScript where more obvios and
                          clear.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
