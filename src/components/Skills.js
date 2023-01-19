import ruby from "../assets/img/ruby.svg";
import react from "../assets/img/react.svg";
import rails from "../assets/img/rails.svg";
import nodejs from "../assets/img/node-js.svg";
import figma from "../assets/img/figma.svg";
import html from "../assets/img/html.svg";
import mongo from "../assets/img/mongodb.svg";
import git from "../assets/img/github-white.svg";
import db from "../assets/img/database.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <Carousel responsive={responsive} autoPlay={true} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={react} alt="react" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={nodejs} alt="node" />
                                <h5>Node.JS</h5>
                            </div>
                            <div className="item">
                                <img src={mongo} alt="mongo" />
                                <h5>mongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={ruby} alt="ruby" />
                                <h5>Ruby</h5>
                            </div>
                            <div className="item">
                                <img src={rails} alt="rails" />
                                <h5>Rails</h5>
                            </div>
                            <div className="item">
                                <img src={db} alt="SQL" />
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={html} alt="html" />
                                <h5>HTML & CSS</h5>
                            </div>
                            <div className="item">
                                <img src={figma} alt="figma" />
                                <h5>Figma</h5>
                            </div>
                            <div className="item">
                                <img src={git} alt="github" />
                                <h5>Github</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="background" />
    </section>
  )
}
