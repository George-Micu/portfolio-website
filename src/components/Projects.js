import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/banner-bg.png";
import projImg2 from "../assets/img/logo-svg.svg";
import projImg3 from "../assets/img/logo-svg.svg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const MERNprojects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      link: "https://www.svgrepo.com/svg/391865/github"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];
  const rorProjects = [
    {
      title: "Business1 Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      link: "https://www.svgrepo.com/svg/391865/github"
    },
    {
      title: "Busines2 Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business3 Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">MERN Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Rails Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          MERNprojects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                onClick={() => window.open(project.link, "_blank")}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          rorProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                onClick={() => window.open(project.link, "_blank")}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background Img"></img>
    </section>
  )
}
