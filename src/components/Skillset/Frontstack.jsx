import React, {useState} from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
} from "react-icons/di";
import {
  SiMaterialui,
  SiRedux,
  SiHtml5,
  SiVuedotjs
} from "react-icons/si";

const Frontstack = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

const handleMouseEnter = (icon) => {
  setHoveredIcon(icon);
};

const handleMouseLeave = () => {
  setHoveredIcon(null);
};
const hoverColors = {
    SiHtml5: '#E34F26',
    DiJavascript1: '#F7DF1E',
    DiReact: '#61DAFB',
    SiRedux: '#764ABC',
    SiMaterialui: '#0081CB',
    DiGit: '#F05032',
    SiVueDotJs: '#42b883',
  };

  const getIconStyle = (icon) => ({
    color: hoveredIcon === icon ? hoverColors[icon] : 'inherit',
    transition: 'color 0.3s',
  });
return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons"          onMouseEnter={() => handleMouseEnter('DiReact')}
          onMouseLeave={handleMouseLeave}>
        <DiReact
          onMouseEnter={() => handleMouseEnter('DiReact')}
          style={getIconStyle('DiReact')}
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons"          onMouseEnter={() => handleMouseEnter('SiRedux')}
          onMouseLeave={handleMouseLeave}>
        <SiRedux
          onMouseEnter={() => handleMouseEnter('SiRedux')}
          style={getIconStyle('SiRedux')}
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons"           onMouseEnter={() => handleMouseEnter('DiJavascript1')}
          onMouseLeave={handleMouseLeave}>
        <DiJavascript1
          onMouseEnter={() => handleMouseEnter('DiJavascript1')}
          style={getIconStyle('DiJavascript1')}
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons"          onMouseEnter={() => handleMouseEnter('SiVueDotJs')}
          onMouseLeave={handleMouseLeave}>
        <SiVuedotjs
          onMouseEnter={() => handleMouseEnter('SiVueDotJs')}
          style={getIconStyle('SiVueDotJs')}
        />
      </Col>
            <Col xs={4} md={2} className="tech-icons"          onMouseEnter={() => handleMouseEnter('SiHtml5')}
          onMouseLeave={handleMouseLeave}>
        <SiHtml5
          onMouseEnter={() => handleMouseEnter('SiHtml5')}
          style={getIconStyle('SiHtml5')}
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons"          onMouseEnter={() => handleMouseEnter('SiMaterialui')}
          onMouseLeave={handleMouseLeave}>
        <SiMaterialui
          onMouseEnter={() => handleMouseEnter('SiMaterialui')}
          style={getIconStyle('SiMaterialui')}
        />
      </Col>
    </Row>
  );
}

export default Frontstack;