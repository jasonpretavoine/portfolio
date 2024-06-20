import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Jason from "../../assets/photo.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";



const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  A PROPOS DE <span className="yellow"> MOI </span>
                </h1>
                <p className="home-about-body">
                 Bonjour, mon nom est <span className="yellow">PRETAVOINE Jason</span>,
                 je suis de <span className="yellow"> Rouen.</span>
                <br />
                <br />
                Récemment diplômé de la formation intensive Développeur Full Stack de O'Clock, avec une spécialisation en React.
                <br />
                <br />
                 En tant que 
                  Développeur <b className="yellow"> Full Stack </b>,  
                  j'apprécie relever de nouveaux défis et élargir continuellement mes compétences.
                  <br />
                  <br /> Mes compétences actuelles en front-end sont
                    <b className="yellow"> React, VueJS, Javascript, HTML/SASS </b>
                    que j'utilise dans mes projets avec en back-end : 
                  <b className="yellow"> PHP, Symfony, Laravel, MySQL, Node.js, MongoDB</b>
                  <br />
                  <br />
                  Je m'intéresse également aux autres technologies comme : 
                    <b className="yellow"> .NET, Flutter et Java. </b>
                  <br />
                  
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={Jason} className="img-fluid" alt="avatar" style={{ borderRadius: '50%' }}
                  />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>MES RESEAUX</h1>
                <p>
                N'hésiter pas à me <span className="yellow">contacter.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/jasonpretavoine"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/jason-pretavoine/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About