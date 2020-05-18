import React from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import userImage from "../../assets/images/zakaria.jpg";

import "./About.css";

import Emoji from "../../components/UI/Emoji/Emoji";

const About = () => (
  <Row>
    <Col sm={2}></Col>
    <Col sm={8}>
      <Card>
        <Card.Img
          variant="top"
          src={userImage}
          style={{
            width: "18rem",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        />
        <Card.Body>
          <Card.Title className="center">Zakaria Moukit</Card.Title>
          <Card.Text>
            Zakaria has been working <Emoji symbol="👨‍💻👨‍💻" />
            with #PHP and frameworks such as #Zend_Framework and #Laravel since
            2009. During this period he built, together with very talented
            engineers and developers <Emoji symbol="👏👏👏" /> , many programs
            and applications, which he is proud of
            <Emoji symbol="💪💪" /> , and which have helped many people all over
            the world <Emoji symbol="🇲🇦 🇳🇱 🇫🇷 ❤️" />. <br />
            Zakaria is challenging himself to become a Reactjs developer{" "}
            <Emoji symbol="🍓🍓" /> by the end of July 2020{" "}
            <Emoji symbol="😀😀" /> , and as a first step he implemented a small
            Reactjs webapp that will list the most starred Github repos that
            were created in the last 30 days.
          </Card.Text>
          <Button
            href="https://www.linkedin.com/in/zakaria-moukit-93314550/"
            target="_blank"
            variant="primary"
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            More About Zakaria
          </Button>
        </Card.Body>
      </Card>
    </Col>
    <Col sm={2}></Col>
  </Row>
);

export default About;
