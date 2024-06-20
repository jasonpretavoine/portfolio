import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import lebercail from "../assets/projects/lebercail.png";
import ofourno from "../assets/projects/ofourno.png";
import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="yellow">Projets </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ofourno}
              isBlog={false}
              title="O'Fourn'O"
              description="Projet de fin d'études, O'Fourn'O est une application web de recettes de cuisine. Elle permet aux utilisateurs de consulter des recettes, de les ajouter à leurs favoris, de les commenter et de les noter. Les utilisateurs peuvent également rechercher des recettes par ingrédients avec ce qu'ils ont dans leurs réfrigérateur. L'application est développée avec React, Redux, Symfony et MySQL."
              ghLink="https://github.com/jasonpretavoine/projet-o-fourn-o-front"
              demoLink="https://front.prodjason.site"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lebercail}
              isBlog={false}
              title="Projet Le Bercail"
              description="Projet de création d'une application web d'un restaurant de montagne. L'application permet aux utilisateurs de consulter le menu, de consulter les événements à venir et de contacter le restaurant. L'application est développée avec WordPres et un thème sur-mesure."
              demoLink="https://lebercail-allos.fr"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Portfolio"
              description="Création de mon portfolio personnel. L'application est développée avec React et React-Bootstrap."
              ghLink="https://github.com/19sajib/mern-stack-ecommerce"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects