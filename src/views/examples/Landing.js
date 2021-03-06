/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

import cardImg from "assets/img/theme/spaceExploration.png";
import ill2 from "assets/img/ill/ill-2.svg";
import busMall from "assets/img/theme/busMall.png";
import cookie from "assets/img/theme/cookie.png";
import team3 from "assets/img/theme/team-3-800x800.jpg";
import team4 from "assets/img/theme/team-4-800x800.jpg";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        Projects with Code Fellows{" "}
                        <span>Progression from Foundation to Advanced Software Development</span>
                      </h1>
                      <p className="lead text-white">
                        By seeing how technology improves the way we live every day, I???m excited to contribute and make things smarter to use.
                      </p>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <CardImg
                            alt="..."
                            src={cardImg}
                            top
                          />
                          <h6 className="text-primary text-uppercase">
                            Space Exploration
                          </h6>
                          <p className="description mt-3">
                            A relaxing and educational app for traveling through space and learning about each planet.
                          </p>
                          
                          <Button
                            className="mt-4"
                            color="primary"
                            href="https://space-exploration-team-awesom.github.io/SpaceExploration/"
                            
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                        <CardImg
                            alt="..."
                            src={busMall}
                            top
                          />
                          <h6 className="text-success text-uppercase">
                            Bus Mall
                          </h6>
                          <p className="description mt-3">
                             An app that finds the most popular items in the catalog of assorted high-markup products to reduce the costs to print and distribute. 
                          </p>
                          
                          <Button
                            className="mt-4"
                            color="success"
                            href="https://tianyitimma.github.io/busMall/"
                            
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                        <CardImg
                            alt="..."
                            src={cookie}
                            top
                          />
                          <h6 className="text-warning text-uppercase">
                            Salmon Cookies
                          </h6>
                          <p className="description mt-3">
                            Helping with the branding of a cookie franchise, as well as internal data management for the company
                          </p>
                          
                          <Button
                            className="mt-4"
                            color="warning"
                            href="https://tianyitimma.github.io/cookie-stand/"
                            
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Future Project
                          </h6>
                          <p className="description mt-3">
                            A placeholder for future project.
                          </p>
                          
                          <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            Future Project
                          </h6>
                          <p className="description mt-3">
                            A placeholder for future project. 
                          </p>
                          
                          <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Future Project
                          </h6>
                          <p className="description mt-3">
                            A placeholder for future project.
                          </p>
                          
                          <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={cardImg}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Space Exploration
                      </h4>
                      <p className="lead text-italic text-white">
                        This educational app demonstrates our fundamental HTML, CSS, and JavaScript skills in web development. There are many user interaction features that allow users to acquire more knowledge about the solar system.
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={busMall}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Bus Mall
                      </h4>
                      <p className="lead text-italic text-white">
                        This project will find the most popular items in the catalog of assorted high-markup products to reduce the costs to print and distribute. 
                      </p>
                    </blockquote>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
          
          <section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">My Background</h2>
                  <p className="lead text-muted">
                    Hi, my name is Tianyi Ma. I???m a software developer based in Seattle. I graduated with an electrical engineering degree. After college, I worked as an engineer at Intel Corporation, a campus faith group leader, and a nursing assistant at a local hospital since the end of 2019. While being in different professions, my vision was the same that is helping people to have a better life. This is also the main purpose for me to pursue a software-developing career. There is no other thing that can reach so many people and change their lives as the software does. Especially during the pandemic, people???s life is much more dependent on software. My previous working experiences make me a good listener to understand what my client???s needs and my engineering background will help me to provide the right solution. I am looking to join a company that shares the same value and focuses on improving the lives of others.
                  </p>
                </Col>
              </Row>
            </Container>
          </section>
          
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Landing;
