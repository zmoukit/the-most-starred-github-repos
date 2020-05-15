import React from "react";
import { Media, Button, Badge } from "react-bootstrap";
import PropTypes from "prop-types";
const Repo = props => (
  <Media as="li">
    <img
      width={128}
      height={128}
      className="mr-3"
      src={props.owner.avatar_url}
      alt={props.title}
    />
    <Media.Body>
      <h4>{props.title}</h4>
      <p>{props.desc}</p>
      <p>
        <Button variant="dark">
          Stars <Badge variant="light">{props.stars}</Badge>
          <span className="sr-only">
            {props.stars} users starred this repository
          </span>
        </Button>
        <Button variant="secondary">
          Issues <Badge variant="light">{props.issues}</Badge>
          <span className="sr-only">{props.issues} issues found</span>
        </Button>
      </p>
    </Media.Body>
  </Media>
);

Repo.prototype = {
  owner: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired
  }).isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  stars: PropTypes.string.isRequired,
  issues: PropTypes.number.isRequired
};

export default Repo;
