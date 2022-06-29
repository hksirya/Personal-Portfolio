import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Projects = () => {

  const projects = [
    {
      title: "Soneva Jani",
      description: "A Front-end Landing page of Soneva Jani(hotel).It can be used to book hotel rooms and get Details about the hotel.",
      imgUrl: projImg1,
    },
    {
      title: "Keeper App",
      description: "The Keeper App is a clone of Google Keep WebApp Made purely using React front-end interface . A User can add Multiple Notes and delete it later.",
      imgUrl: projImg2,
    },
    {
      title: "TinDog",
      description: "A tinder website made exclusively for Dogs.",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
          <TrackVisibility>
        {({ isVisible}) =>
        <div className={isVisible ? "animate__animated animate__slideInUp":""}>
                <h2>Projects</h2>
                <p><br/>The Live Link and Source Code of all the Projects can be Found on GITHUB </p>
                </div>}
                </TrackVisibility>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab One</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab two</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab three</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content >
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Projects to Be Added Soon. </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Projects to Be Added Soon.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}