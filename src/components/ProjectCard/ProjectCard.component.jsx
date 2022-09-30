import { Col } from "react-bootstrap";
import "./ProjectCard.styles.css";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <a className="demo" href={link} target="_blank" rel="noreferrer">
            Click to view live demo
          </a>
        </div>
      </div>
    </Col>
  );
};
