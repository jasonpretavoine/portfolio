import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

const Github = () => {
  const labels = {
  months: [
    'Jan',
    'Fev',
    'Mar',
    'Avr',
    'Mai',
    'Juin',
    'Juil',
    'Aout',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ],
  weekdays: [
    'Dim',
    'Lun',
    'Mar',
    'Mer',
    'Jeu',
    'Ven',
    'Sam',
  ],
  totalCount: '{{count}} activités',
  legend: {
    less: 'Moins',
    more: 'Plus',
  },
};
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Mon <strong className="yellow">GitHub</strong>
      </h1>
      <GitHubCalendar
        username="jasonpretavoine"
        blockSize={15}
        blockMargin={5}
        color="#6102ce"
        labels={labels}
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
