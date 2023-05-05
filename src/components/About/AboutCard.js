import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Youssef LAKRIM </span>
            from <span className="purple"> Orange Digital Center.</span>
            <br />I am a Full-Stack Javascript Developer Certified by GoMyCode in Orange Digital Center at Rabat Morocco.
            <br />
            <br />
            Apart from coding, some other activities that am Electromecanic Technical I like to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Troubleshooting and repairing electromechanical systems.
            </li>
            <li className="about-activity">
              <ImPointRight /> Collaborating with other professionals: You may need to work with engineers, electricians, and other technicians to troubleshoot and repair complex electromechanical systems.
            </li>
            <li className="about-activity">
              <ImPointRight /> Performing preventive maintenance: To ensure that equipment operates efficiently and lasts as long as possible, you may need to perform routine maintenance tasks, such as lubricating moving parts, replacing worn-out components, and cleaning equipment.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Youssef LAKRIM</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
