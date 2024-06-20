import React from "react";
import { Container } from "react-bootstrap";

import Particle from '../components/Particle'
import Frontstack from "../components/Skillset/Frontstack";
import Backstack from "../components/Skillset/Backstack";
import Github from "../components/Skillset/Github";

const Skillset = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Skills <strong className="yellow">Front end </strong>
        </h1>

        <Frontstack />

        <h1 className="project-heading">
          Skills <strong className="yellow">Back end</strong>
        </h1>
        <Backstack />

        <Github />
      </Container>
    </Container>
  )
}

export default Skillset