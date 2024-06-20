import React, {useState} from "react";
import { Col, Row } from "react-bootstrap";
import { DiPhp, DiNodejs } from "react-icons/di";
import { SiSymfony, SiLaravel, SiMongodb, SiMysql } from "react-icons/si";
const Backstack = () => {

  const [hoveredIcon, setHoveredIcon] = useState(null);

const handleMouseEnter = (icon) => {
  setHoveredIcon(icon);
};

const handleMouseLeave = () => {
  setHoveredIcon(null);
};

const hoverColors = {
  DiPhp: '#777BB4',
  SiSymfony: '#000000',
  SiLaravel: '#FF2D20',
  SiMongodb: '#47A248',
  SiMysql: '#4479A1',
  DiNodejs: '#339933',
};

const getIconStyle = (icon) => ({
  color: hoveredIcon === icon ? hoverColors[icon] : 'inherit',
  transition: 'color 0.3s',
});
return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col 
        xs={4} 
        md={2} 
        className="tech-icons" 
        onMouseEnter={() => handleMouseEnter('DiPhp')} 
        onMouseLeave={handleMouseLeave}
      >
        <DiPhp style={getIconStyle('DiPhp')} />
      </Col>
      <Col 
        xs={4} 
        md={2} 
        className="tech-icons" 
        onMouseEnter={() => handleMouseEnter('SiSymfony')} 
        onMouseLeave={handleMouseLeave}
      >
        <SiSymfony style={getIconStyle('SiSymfony')} />
      </Col>
      <Col 
        xs={4} 
        md={2} 
        className="tech-icons" 
        onMouseEnter={() => handleMouseEnter('SiLaravel')} 
        onMouseLeave={handleMouseLeave}
      >
        <SiLaravel style={getIconStyle('SiLaravel')} />
      </Col>
      <Col 
        xs={4} 
        md={2} 
        className="tech-icons" 
        onMouseEnter={() => handleMouseEnter('SiMongodb')} 
        onMouseLeave={handleMouseLeave}
      >
        <SiMongodb style={getIconStyle('SiMongodb')} />
      </Col>
      <Col 
        xs={4} 
        md={2} 
        className="tech-icons" 
        onMouseEnter={() => handleMouseEnter('SiMysql')} 
        onMouseLeave={handleMouseLeave}
      >
        <SiMysql style={getIconStyle('SiMysql')} />
      </Col>
      <Col 
        xs={4} 
        md={2} 
        className="tech-icons" 
        onMouseEnter={() => handleMouseEnter('DiNodejs')} 
        onMouseLeave={handleMouseLeave}
      >
        <DiNodejs style={getIconStyle('DiNodejs')} />
      </Col>
    </Row>
  );
}

export default Backstack;
